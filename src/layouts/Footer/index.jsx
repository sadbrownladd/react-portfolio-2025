import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2">
        © 2025 Abdullah Asim. All rights reserved.
      </Typography>
    </Box>
  );
}