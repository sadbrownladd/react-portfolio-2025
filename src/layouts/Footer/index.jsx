import { Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography variant="body2">
        © 2025 My Portfolio. All rights reserved.
      </Typography>
    </footer>
  );
}