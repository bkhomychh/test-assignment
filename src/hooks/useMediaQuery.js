import { useEffect } from 'react';
import { useState } from 'react';

export const useMediaQuery = screenSize => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${screenSize})`;
    const media = window.matchMedia(query);
    const handleResize = () => setMatches(media.matches);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize, matches]);

  return matches;
};
