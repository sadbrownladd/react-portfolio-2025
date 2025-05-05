import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Header.module.css';

export default function Header() {
  const { title } = usePageTitle();

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/education" className={styles.link}>Education</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}