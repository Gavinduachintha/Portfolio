/**
 * INSTRUCTIONS: 
 * 1. Create a directory: src/hooks
 * 2. Move this file content to: src/hooks/useScrollAnimation.js
 * 3. Delete this temporary file
 * 
 * useScrollAnimation Hook
 * Uses Intersection Observer API for performance-optimized scroll animations
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root (e.g., '0px 0px -100px 0px')
 * @param {boolean} options.triggerOnce - Whether to trigger only once or on every intersection
 * @returns {Object} - Returns ref to attach to element and inView state
 */
export function useScrollAnimation({
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // If reduced motion is preferred, set inView immediately
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setInView(true);
          
          // If triggerOnce is true, disconnect after first intersection
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          // Only reset if we want to trigger multiple times
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Start observing
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}

/**
 * Hook for parallax scroll effects
 * @param {number} speed - Speed multiplier for parallax effect (0.1 - 1)
 * @returns {Object} - Returns ref and transform value
 */
export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const viewportHeight = window.innerHeight;
      
      // Calculate parallax offset
      const offset = (scrolled - elementTop + viewportHeight) * speed;
      setOffset(offset);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * Hook to get multiple refs for staggered animations
 * @param {number} count - Number of refs needed
 * @param {Object} options - Intersection Observer options
 * @returns {Array} - Array of {ref, inView} objects
 */
export function useStaggerAnimation(count, options = {}) {
  const animations = [];
  
  for (let i = 0; i < count; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    animations.push(useScrollAnimation(options));
  }
  
  return animations;
}

export default useScrollAnimation;
