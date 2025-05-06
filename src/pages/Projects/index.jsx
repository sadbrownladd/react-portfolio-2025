import { Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import { useEffect } from 'react';
import SlideTransition from '../../components/SlideTransition';
import bounceFlowImg from '../../assets/BounceFlow.png';
import fourSensiImg from '../../assets/4Sensi.png';
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
      image: bounceFlowImg,
      link: 'https://abdullahasim.itch.io/bounce-flow',
    },
    {
      title: '4sensei',
      description: 'A horror-stealth game where a ninja navigates haunted woods.',
      image: fourSensiImg,
      link: 'https://bia01.itch.io/4sensei',
    },
  ];

  return (
    <SlideTransition>
      <Grid container spacing={2} className={styles.container}>
        <Grid sx={{ width: '100%' }}>
          <Typography variant="h4" align="center" className={styles.heading}>
            Projects
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid key={index} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
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
    </SlideTransition>
  );
}