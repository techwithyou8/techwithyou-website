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
    const w = size.width * 1.6;
    const h = size.height * 1.6;
    return { w, h };
  }, [size]);

  const { major, minor } = useMemo(() => {
    const buildGridMemo = (gap: number, color: string) => {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true
      });
      const positions: number[] = [];
      const halfW = dims.w / 2;
      const halfH = dims.h / 2;

      // Vertical lines
      for (let x = -halfW; x <= halfW; x += gap) {
        positions.push(x, 0, -halfH, x, 0, halfH);
      }
      // Horizontal lines
      for (let z = -halfH; z <= halfH; z += gap) {
        positions.push(-halfW, 0, z, halfW, 0, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      return { geometry, material };
    };

    return {
      major: buildGridMemo(majorGap, lineColorMajor),
      minor: buildGridMemo(minorGap, lineColorMinor)
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
  return (
    <Canvas
      camera={{ position: [0, 160, 380], fov: 58, near: 0.1, far: 2000 }}
      dpr={[1, 2]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <fog attach="fog" args={['#060a12', 300, 1000]} />
      <ambientLight intensity={0.2} />
      <WaveGrid {...props} />
    </Canvas>
  );
};

export default ThreeJSBackground;