import { useEffect } from 'react';

/**
 * Custom hook for scroll reveal animations
 */
export const useScrollReveal = (selector: string, delay: number = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * delay}s both`;
    });
  }, [selector, delay]);
};

/**
 * Custom hook for smooth scrolling to element
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollToElement };
};

