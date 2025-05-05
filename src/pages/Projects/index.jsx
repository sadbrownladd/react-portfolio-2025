import { Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <Grid container spacing={2} className={styles.projects} sx={{ padding: '2rem' }}>
      <Grid>
        <Typography variant="h4" align="center" gutterBottom>
          Projects
        </Typography>
      </Grid>
    </Grid>
  );
}