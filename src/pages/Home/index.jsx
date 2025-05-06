import { Grid, Typography, Avatar, IconButton, Button } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import profileImage from '../../assets/profile.png';
import styles from './Home.module.css';

export default function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');

    const typed = new Typed('#typed-text', {
      strings: ['Freelancer', 'Web Designer', 'Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [setPageTitle]);

  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12} sm={4} className={styles.avatarContainer}>
        <Avatar
          alt="Abdullah Asim"
          src={profileImage || 'https://via.placeholder.com/180'}
          className={styles.avatar}
        />
      </Grid>
      <Grid item xs={12} sm={8} className={styles.content}>
        <Typography variant="h3" className={styles.heading}>
          Hi, I'm <span className={styles.textHighlight}>Abdullah Asim</span>
        </Typography>
        <Typography variant="h5" className={styles.subHeading}>
          I'm a <span id="typed-text"></span>
        </Typography>
        <Typography variant="body1" className={styles.description}>
          I'm a budding web developer specializing in HTML, CSS, and JavaScript. Currently pursuing my BSCS at ITU, I enjoy crafting responsive and dynamic websites that merge clean design with seamless functionality. My studies and hands-on projects fuel my passion for continuous learning and innovative problem-solving in the digital world.
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