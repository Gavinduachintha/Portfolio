/**
 * Animation utilities for scroll-based animations
 * Using framer-motion variants
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Base animation configuration
export const animationConfig = {
  duration: 0.6,
  ease: 'easeOut',
};

// Fade in from bottom
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationConfig.duration,
      ease: animationConfig.ease,
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animationConfig.duration,
      ease: animationConfig.ease,
    },
  },
};

// Fade in from right
export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animationConfig.duration,
      ease: animationConfig.ease,
    },
  },
};

// Simple fade in
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: animationConfig.duration,
      ease: animationConfig.ease,
    },
  },
};

// Scale in
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: animationConfig.ease,
    },
  },
};

// Container for stagger children
export const staggerContainer = (staggerDelay = 0.1) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// Item for stagger animation (fade in up)
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: animationConfig.ease,
    },
  },
};

// Stagger fade in from left
export const staggerItemLeft = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: animationConfig.ease,
    },
  },
};

// Stagger fade in from right
export const staggerItemRight = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: animationConfig.ease,
    },
  },
};

// Parallax scroll effect helper
export const getParallaxY = (scrollY, speed = 0.5) => {
  return scrollY * speed;
};

// Viewport settings for Intersection Observer
export const viewportSettings = {
  once: true, // Trigger animation only once
  amount: 0.2, // Trigger when 20% of element is visible
  margin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
};

// Reduced motion variants
export const getAnimationVariant = (variant) => {
  if (prefersReducedMotion()) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return variant;
};

// Export all variants as a collection
export const variants = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  staggerItem,
  staggerItemLeft,
  staggerItemRight,
};
