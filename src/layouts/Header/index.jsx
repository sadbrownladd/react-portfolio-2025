import { AppBar, Toolbar, Typography, Switch, IconButton, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { usePageTitle } from '../../context/PageTitleContext';
import { useTheme } from '../../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ setSidebarOpen }) {
  const { pageTitle } = usePageTitle();
  const { darkMode, toggleDarkMode } = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSidebarOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={styles.title}>
          {pageTitle}
        </Typography>
        {!isMobile && (
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
        )}
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