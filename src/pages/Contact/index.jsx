import { Grid, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  return (
    <Grid container spacing={2} className={styles.contact} sx={{ padding: '2rem' }}>
      <Grid>
        <Typography variant="h4" align="center" gutterBottom>
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
}