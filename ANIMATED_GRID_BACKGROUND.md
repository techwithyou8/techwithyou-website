# AnimatedGridBackground Component

A sophisticated React component that creates a 3D animated grid background using Three.js and React Three Fiber. The component provides a wave-animated grid with customizable parameters and WebGL fallback support.

## Features

- **3D Wave Animation**: Real-time animated grid with wave effects
- **WebGL Fallback**: Graceful degradation to CSS grid when WebGL is unavailable
- **Highly Customizable**: Extensive configuration options for appearance and behavior
- **Performance Optimized**: Efficient rendering with proper cleanup and memory management
- **TypeScript Support**: Full type safety with comprehensive interfaces

## Installation

The component requires the following dependencies:

```bash
npm install three @react-three/fiber @types/three
```

## Usage

### Basic Usage

```tsx
import { AnimatedGridBackground } from '@/components/AnimatedGridBackground';

export default function MyComponent() {
  return (
    <div className="relative min-h-screen">
      <AnimatedGridBackground />
      {/* Your content here */}
    </div>
  );
}
```

### Advanced Configuration

```tsx
<AnimatedGridBackground
  amplitude={25}              // Wave height (default: 22)
  speed={0.8}                // Animation speed (default: 0.55)
  majorGap={100}             // Major grid line spacing (default: 80)
  minorGap={20}              // Minor grid line spacing (default: 16)
  lineColorMajor="rgba(34,211,238,0.1)"  // Major line color
  lineColorMinor="rgba(59,130,246,0.05)" // Minor line color
  enableNoise={true}         // Add noise to waves (default: true)
  className="custom-class"   // Additional CSS classes
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `amplitude` | `number` | `22` | Controls the height of the wave animation |
| `speed` | `number` | `0.55` | Animation speed multiplier |
| `majorGap` | `number` | `80` | Spacing between major grid lines (pixels) |
| `minorGap` | `number` | `16` | Spacing between minor grid lines (pixels) |
| `lineColorMajor` | `string` | `'rgba(255,255,255,0.07)'` | Color of major grid lines |
| `lineColorMinor` | `string` | `'rgba(255,255,255,0.02)'` | Color of minor grid lines |
| `enableNoise` | `boolean` | `true` | Whether to add noise to the wave pattern |
| `className` | `string` | `undefined` | Additional CSS classes |

## Configuration Presets

### Subtle (Professional)
```tsx
<AnimatedGridBackground
  amplitude={15}
  speed={0.3}
  majorGap={120}
  minorGap={24}
  lineColorMajor="rgba(255,255,255,0.05)"
  lineColorMinor="rgba(255,255,255,0.01)"
  enableNoise={false}
/>
```

### High Energy
```tsx
<AnimatedGridBackground
  amplitude={35}
  speed={1.2}
  majorGap={60}
  minorGap={12}
  lineColorMajor="rgba(34,211,238,0.15)"
  lineColorMinor="rgba(59,130,246,0.08)"
  enableNoise={true}
/>
```

### Cyberpunk Theme
```tsx
<AnimatedGridBackground
  amplitude={30}
  speed={0.9}
  majorGap={80}
  minorGap={16}
  lineColorMajor="rgba(0,255,157,0.12)"
  lineColorMinor="rgba(255,20,147,0.06)"
  enableNoise={true}
/>
```

## Implementation Details

### Three.js Components

The component uses several Three.js concepts:

- **BufferGeometry**: Efficient geometry representation for grid lines
- **LineSegments**: Renders the grid lines
- **LineBasicMaterial**: Material for line rendering with transparency
- **useFrame**: Animation loop for real-time updates

### Animation System

The wave animation combines:
- **Sine waves**: Primary wave motion on X and Z axes
- **Cosine waves**: Secondary wave patterns for complexity
- **Noise function**: Optional pseudo-noise for organic movement
- **Time-based**: Synchronized with Three.js clock for smooth animation

### Fallback System

When WebGL is unavailable:
- Detects WebGL support on component mount
- Falls back to CSS-based static grid
- Displays loading message
- Maintains visual consistency

## Performance Considerations

- **Memory Management**: Proper disposal of geometries and materials
- **Efficient Updates**: Only updates necessary vertex positions
- **Optimized Rendering**: Uses BufferGeometry for performance
- **Background Processing**: Runs in Web Worker-compatible environment

## Browser Support

- **WebGL Required**: For 3D animation (fallback available)
- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+
- **Mobile Support**: iOS Safari 13+, Chrome Android 80+

## Troubleshooting

### Performance Issues
- Reduce `amplitude` and `speed` values
- Increase `majorGap` and `minorGap` for fewer lines
- Disable `enableNoise` for simpler calculations

### Visual Issues
- Adjust `lineColorMajor` and `lineColorMinor` for better contrast
- Modify camera position in Canvas component if needed
- Check z-index conflicts with other elements

### WebGL Issues
- Component automatically falls back to CSS grid
- Check browser WebGL support at webglreport.com
- Ensure hardware acceleration is enabled

## Examples

See the `/grid-test` page for live examples with different configurations.

## License

This component is part of the TechWithYou project and follows the same license terms.