import { Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  const projects = [
    {
      title: 'Bounce Flow',
      description: 'A 2D game with a blend of Flappy Bird and Color Switch obstacles offering players a chance to test their reaction time and enjoy the game.',
      image: '/assets/download.png',
      link: 'https://abdullahasim.itch.io/bounce-flow',
    },
    {
      title: '4sensei',
      description: 'A game that blends horror elements with stealth gameplay, immersing the player in a thrilling experience as a ninja navigating haunted woods.',
      image: '/assets/4sensiImage.jpeg',
      link: 'https://bia01.itch.io/4sensei',
    },
  ];

  return (
    <Grid container spacing={2} className={styles.projects} sx={{ padding: '2rem', minHeight: '100vh' }}>
      <Grid>
        <Typography variant="h4" align="center" gutterBottom className={styles.heading}>
          Projects
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid key={index} sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Link href={project.link} target="_blank" underline="none">
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}