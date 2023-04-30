import { useEffect } from 'react';

export const useCloseModal = fn => {
  useEffect(() => {
    const handleClick = ({ target }) => {
      const classes = [...target.classList];
      const shouldCloseMenu = classes.some(item => item.includes('backdrop'));

      if (shouldCloseMenu) {
        fn();
      }
    };

    window.addEventListener('click', handleClick);
    document.body.classList.add('no-scroll');

    return () => {
      window.removeEventListener('click', handleClick);
      document.body.classList.remove('no-scroll');
    };
  }, [fn]);
};
