import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './SlideTransition.module.css';

export default function SlideTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(styles.animate);
      const timer = setTimeout(() => {
        ref.current.classList.remove(styles.animate);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
}