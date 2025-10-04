'use client';

import dynamic from 'next/dynamic';

const ThreeJSBackground = dynamic(() => import('@/components/ThreeJSBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-900 flex items-center justify-center text-white">Loading 3D...</div>
});

export default function GridTestPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Test the ThreeJSBackground with different configurations */}
      
      {/* Default Configuration */}
      <div className="relative h-screen">
        <ThreeJSBackground 
          amplitude={22}
          speed={0.55}
          majorGap={80}
          minorGap={16}
          lineColorMajor="rgba(255,255,255,0.07)"
          lineColorMinor="rgba(255,255,255,0.02)"
          enableNoise={true}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Default Configuration</h1>
            <p className="text-gray-400">Standard animated grid with default parameters</p>
          </div>
        </div>
      </div>

      {/* High Energy Configuration */}
      <div className="relative h-screen">
        <ThreeJSBackground 
          amplitude={35}
          speed={1.2}
          majorGap={60}
          minorGap={12}
          lineColorMajor="rgba(34,211,238,0.15)"
          lineColorMinor="rgba(59,130,246,0.08)"
          enableNoise={true}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">High Energy Configuration</h1>
            <p className="text-gray-400">Faster animation with more pronounced waves</p>
          </div>
        </div>
      </div>

      {/* Subtle Configuration */}
      <div className="relative h-screen">
        <ThreeJSBackground 
          amplitude={15}
          speed={0.3}
          majorGap={120}
          minorGap={24}
          lineColorMajor="rgba(255,255,255,0.05)"
          lineColorMinor="rgba(255,255,255,0.01)"
          enableNoise={false}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Subtle Configuration</h1>
            <p className="text-gray-400">Gentle waves without noise, perfect for professional contexts</p>
          </div>
        </div>
      </div>

      {/* Direct ThreeJS Test */}
      <div className="relative h-screen">
        <ThreeJSBackground 
          amplitude={35}
          speed={0.8}
          majorGap={80}
          minorGap={16}
          lineColorMajor="rgba(34,211,238,0.15)"
          lineColorMinor="rgba(59,130,246,0.08)"
          enableNoise={true}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Direct ThreeJS Test</h1>
            <p className="text-gray-400">Pure ThreeJS component without wrapper</p>
          </div>
        </div>
      </div>
    </div>
  );
}