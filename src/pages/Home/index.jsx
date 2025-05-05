import { Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <Grid container spacing={2} className={styles.home} sx={{ padding: '2rem', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Grid>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to My Portfolio
        </Typography>
      </Grid>
    </Grid>
  );
}