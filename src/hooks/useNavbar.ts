import { useState, useEffect } from 'react';

/**
 * Custom hook for navbar transparency based on scroll position
 */
export const useNavbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const shouldBeTransparent = (scrollY + 70) < innerHeight;
      setIsTransparent(shouldBeTransparent);

      // Update navbar class for styling
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (shouldBeTransparent) {
          navbar.classList.add('is-transparent');
        } else {
          navbar.classList.remove('is-transparent');
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isTransparent };
};
