import { Card, CardContent, Typography } from '@mui/material';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description }) {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}