import { Grid, Typography, Avatar, IconButton, Button } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12} sm={4} className={styles.avatarContainer}>
        <Avatar
          alt="Abdullah Asim"
          src="/assets/profile.png"
          className={styles.avatar}
        />
      </Grid>
      <Grid item xs={12} sm={8} className={styles.content}>
        <Typography variant="h3" className={styles.heading}>
          Welcome to Abdullah Asim's Portfolio
        </Typography>
        <Typography variant="h5" className={styles.subHeading}>
          About Me
        </Typography>
        <Typography variant="body1" className={styles.description}>
          I'm a passionate Computer Science student at ITU, specializing in web development with HTML, CSS, JavaScript, and React. I love building responsive, user-friendly applications and exploring new technologies.
        </Typography>
        <div className={styles.buttons}>
          <Button variant="contained" component={Link} to="/projects" className={styles.button}>
            View Projects
          </Button>
          <Button variant="outlined" component={Link} to="/contact" className={styles.button}>
            Contact Me
          </Button>
        </div>
        <div className={styles.social}>
          <IconButton href="https://github.com/sadbrownladd" target="_blank" className={styles.socialIcon}>
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/abdullah-asim" target="_blank" className={styles.socialIcon}>
            <LinkedIn />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}