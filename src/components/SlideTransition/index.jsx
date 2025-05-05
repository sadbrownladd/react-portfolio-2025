import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './SlideTransition.module.css';

export default function SlideTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll('h3, h4, h5, h6, p, div, img');
      elements.forEach((el, index) => {
        el.style.animation = `slideDownFadeIn 0.5s ease-out ${index * 0.1}s forwards`;
        el.style.opacity = '0';
      });
      return () => {
        elements.forEach((el) => {
          el.style.animation = '';
          el.style.opacity = '';
        });
      };
    }
  }, [location.pathname]);

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
}