import { Grid, Typography, Avatar } from '@mui/material';
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
        <Typography variant="h3" align="center" gutterBottom className={styles.heading}>
          Welcome to Abdullah Asim's Portfolio
        </Typography>
        <Avatar
          alt="Abdullah Asim"
          src="/assets/profile.png"
          className={styles.avatar}
        />
        <Typography variant="h5" align="center" gutterBottom className={styles.subHeading}>
          About Me
        </Typography>
        <Typography variant="body1" align="center" className={styles.aboutText}>
          I'm a budding web developer specializing in HTML, CSS, and JavaScript.
          Currently pursuing my BSCS at ITU, I enjoy crafting responsive and dynamic
          websites that merge clean design with seamless functionality.
        </Typography>
      </Grid>
    </Grid>
  );
}