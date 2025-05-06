import styles from './SlideTransition.module.css';

export default function SlideTransition({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}