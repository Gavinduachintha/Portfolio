import React from 'react';
import GridDistortion from './components/common/GridDistortion';

/**
 * Example usage of the enhanced GridDistortion component
 */

// Example 1: Full featured with all enhancements
export const FullFeaturedExample = () => (
  <div className="w-full h-screen bg-gray-900">
    <GridDistortion
      imageSrc="/path/to/hero-image.jpg"
      className="w-full h-full"
      showGrid={true}
      showNodes={true}
      gridLayers={3}
      grid={15}
      mouse={0.1}
      strength={0.15}
      relaxation={0.9}
    />
  </div>
);

// Example 2: Subtle effect (fewer layers, no nodes)
export const SubtleExample = () => (
  <div className="w-full h-96">
    <GridDistortion
      imageSrc="/path/to/background.jpg"
      className="w-full h-full opacity-50"
      showGrid={true}
      showNodes={false}
      gridLayers={2}
    />
  </div>
);

// Example 3: Image distortion only (original behavior)
export const ImageOnlyExample = () => (
  <div className="w-full h-screen">
    <GridDistortion
      imageSrc="/path/to/image.jpg"
      className="w-full h-full"
      showGrid={false}
      showNodes={false}
    />
  </div>
);

// Example 4: Maximum depth with many layers
export const DeepParallaxExample = () => (
  <div className="w-full h-screen bg-black">
    <GridDistortion
      imageSrc="/path/to/deep-space.jpg"
      className="w-full h-full"
      showGrid={true}
      showNodes={true}
      gridLayers={5}
      strength={0.2}
    />
  </div>
);

// Example 5: Hero section with overlay content
export const HeroSectionExample = () => (
  <div className="relative w-full h-screen">
    <GridDistortion
      imageSrc="/path/to/hero.jpg"
      className="absolute inset-0"
      showGrid={true}
      showNodes={true}
      gridLayers={3}
    />
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome</h1>
        <p className="text-xl">Interactive Grid Distortion</p>
      </div>
    </div>
  </div>
);

export default FullFeaturedExample;
