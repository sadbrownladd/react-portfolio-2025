import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './SlideTransition.module.css';

export default function SlideTransition({ children }) {
  const location = useLocation();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={variants}
      key={location.pathname} // Ensures animation retriggers on route change
    >
      {children}
    </motion.div>
  );
}