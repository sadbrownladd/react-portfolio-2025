import { AppBar, Toolbar, Typography, Switch, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { usePageTitle } from '../../context/PageTitleContext';
import { useTheme } from '../../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './Header.module.css';

export default function Header() {
  const { pageTitle } = usePageTitle();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          {pageTitle}
        </Typography>
        <div className={styles.navLinks}>
          <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            Home
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            Education
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
            Contact
          </NavLink>
        </div>
        <div className={styles.themeToggle}>
          <IconButton className={styles.themeIcon}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Switch checked={darkMode} onChange={toggleDarkMode} className={styles.themeSwitch} />
        </div>
      </Toolbar>
    </AppBar>
  );
}