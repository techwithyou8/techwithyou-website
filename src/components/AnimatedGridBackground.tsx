'use client';

import React, { useRef, useEffect, useState, ComponentType } from 'react';
import dynamic from 'next/dynamic';
import styles from './AnimatedGridBackground.module.css';

export interface AnimatedGridBackgroundProps {
  amplitude?: number;
  speed?: number;
  majorGap?: number;
  minorGap?: number;
  lineColorMajor?: string;
  lineColorMinor?: string;
  enableNoise?: boolean;
  className?: string;
}

// Define the props type for ThreeJSBackground
interface ThreeJSBackgroundProps {
  amplitude: number;
  speed: number;
  majorGap: number;
  minorGap: number;
  lineColorMajor: string;
  lineColorMinor: string;
  enableNoise: boolean;
}

// Create dynamic component for Three.js with no SSR
const ThreeJSBackground = dynamic(
  () => import('./ThreeJSBackground'), 
  { 
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[#070c14] [background:radial-gradient(circle_at_50%_20%,rgba(34,63,105,0.15),transparent_60%),linear-gradient(#0b111d,#060a12)]" />
    )
  }
) as ComponentType<ThreeJSBackgroundProps>;

const defaultProps: Required<Omit<AnimatedGridBackgroundProps, 'className'>> = {
  amplitude: 22,
  speed: 0.55,
  majorGap: 80,
  minorGap: 16,
  lineColorMajor: 'rgba(255,255,255,0.07)',
  lineColorMinor: 'rgba(255,255,255,0.02)',
  enableNoise: true
};

export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = (props) => {
  const p = { ...defaultProps, ...props };
  const [isClient, setIsClient] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const [threejsLoaded, setThreejsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebgl(false);
      } else {
        // Give ThreeJS some time to load
        setTimeout(() => setThreejsLoaded(true), 1000);
      }
    } catch {
      setWebgl(false);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--major-gap', `${p.majorGap}px`);
      containerRef.current.style.setProperty('--minor-gap', `${p.minorGap}px`);
    }
  }, [p.majorGap, p.minorGap]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${props.className || ''}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#070c14] [background:radial-gradient(circle_at_50%_20%,rgba(34,63,105,0.15),transparent_60%),linear-gradient(#0b111d,#060a12)]" />
      
      {/* Always show CSS fallback grid */}
      <div className={`absolute inset-0 ${styles['animated-grid-fallback']}`} />
      
      {/* Try to load ThreeJS background if supported */}
      {isClient && webgl && threejsLoaded && (
        <div className="absolute inset-0">
          <ThreeJSBackground {...p} />
        </div>
      )}
    </div>
  );
};

AnimatedGridBackground.displayName = 'AnimatedGridBackground';