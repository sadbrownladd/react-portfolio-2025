import { Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  const projects = [
    {
      title: 'Bounce Flow',
      description: 'A 2D game blending Flappy Bird and Color Switch obstacles to test reaction time.',
      image: '/assets/download.png',
      link: 'https://abdullahasim.itch.io/bounce-flow',
    },
    {
      title: '4sensei',
      description: 'A horror-stealth game where a ninja navigates haunted woods.',
      image: '/assets/4sensiImage.jpeg',
      link: 'https://bia01.itch.io/4sensei',
    },
  ];

  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={styles.heading}>
          Projects
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={project.link} target="_blank" underline="none">
                <Card className={styles.card}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                    className={styles.cardImage}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}