import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ThreeJSBackgroundProps {
  amplitude: number;
  speed: number;
  majorGap: number;
  minorGap: number;
  lineColorMajor: string;
  lineColorMinor: string;
  enableNoise: boolean;
}

// Simple pseudo-noise (cheap) – replace with simplex if desired
function noise2D(x: number, y: number) {
  return (Math.sin(x * 0.037 + y * 0.019) + Math.sin(x * 0.11 - y * 0.051)) * 0.5;
}

function WaveGrid({
  amplitude,
  speed,
  majorGap,
  minorGap,
  lineColorMajor,
  lineColorMinor,
  enableNoise
}: ThreeJSBackgroundProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const majorLines = useRef<THREE.LineSegments>(null!);
  const minorLines = useRef<THREE.LineSegments>(null!);

  const { size } = useThree();

  const dims = useMemo(() => {
    // Choose plane size larger than viewport so perspective fills edges
    // Reduce size on mobile for better performance
    const isMobile = size.width < 768;
    const multiplier = isMobile ? 1.3 : 1.6;
    const w = size.width * multiplier;
    const h = size.height * multiplier;
    return { w, h };
  }, [size]);

  const { major, minor } = useMemo(() => {
    const buildGridMemo = (gap: number, color: string, isMobile = false) => {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: isMobile ? 0.7 : 1.0 // Reduce opacity on mobile for better performance
      });
      const positions: number[] = [];
      const halfW = dims.w / 2;
      const halfH = dims.h / 2;

      // Reduce line density on mobile
      const step = isMobile ? gap * 1.5 : gap;

      // Vertical lines
      for (let x = -halfW; x <= halfW; x += step) {
        positions.push(x, 0, -halfH, x, 0, halfH);
      }
      // Horizontal lines
      for (let z = -halfH; z <= halfH; z += step) {
        positions.push(-halfW, 0, z, halfW, 0, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      return { geometry, material };
    };

    const isMobile = dims.w < 768;
    return {
      major: buildGridMemo(majorGap, lineColorMajor, isMobile),
      minor: buildGridMemo(minorGap, lineColorMinor, isMobile)
    };
  }, [majorGap, minorGap, lineColorMajor, lineColorMinor, dims]);

  useEffect(() => {
    return () => {
      major.geometry.dispose();
      minor.geometry.dispose();
      (major.material as THREE.Material).dispose();
      (minor.material as THREE.Material).dispose();
    };
  }, [major, minor]);

  // Animate by warping y using a synthesized wave
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const applyWave = (lineSegments: THREE.LineSegments) => {
      const pos = lineSegments.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const wave =
          Math.sin((x + t * 140) * 0.004) +
          Math.cos((z - t * 110) * 0.0042) +
          Math.sin((x * 0.002 + z * 0.0015) + t * 80) * 0.7 +
          (enableNoise ? noise2D(x * 0.09 + t * 2.2, z * 0.09 - t * 1.8) * 1.6 : 0);
        const y = (wave / 2.8) * amplitude;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    };
    applyWave(majorLines.current);
    applyWave(minorLines.current);
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI * 0.38, 0, 0]} position={[0, -80, 0]}>
      <lineSegments ref={minorLines} geometry={minor.geometry} material={minor.material} />
      <lineSegments ref={majorLines} geometry={major.geometry} material={major.material} />
    </group>
  );
}

const ThreeJSBackground: React.FC<ThreeJSBackgroundProps> = (props) => {
  // Detect mobile devices for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <Canvas
      camera={{ position: [0, 160, 380], fov: 58, near: 0.1, far: 2000 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile
      gl={{ 
        antialias: !isMobile, // Disable antialias on mobile for performance
        powerPreference: 'high-performance',
        alpha: false, // Disable transparency for better performance
        stencil: false,
        depth: true
      }}
      frameloop="demand" // Only render when needed
      performance={{
        min: 0.2, // Lower minimum framerate for mobile
        max: isMobile ? 0.8 : 1,
        debounce: 200
      }}
    >
      <fog attach="fog" args={['#060a12', 300, 1000]} />
      <ambientLight intensity={0.2} />
      <WaveGrid {...props} />
    </Canvas>
  );
};

export default ThreeJSBackground;