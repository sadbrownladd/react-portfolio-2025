import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Header.module.css';

export default function Header() {
  const { title } = usePageTitle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleTheme = () => {
    setTheme(!theme);
    document.body.classList.toggle('light-theme');
    const button = document.getElementById('theme-toggle');
    button.textContent = theme ? 'Dark Mode' : 'Light Mode';
  };

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
        <Button
          id="theme-toggle"
          variant="contained"
          onClick={toggleTheme}
          className={styles.themeButton}
        >
          Dark Mode
        </Button>
        <Avatar
          alt="Profile"
          src="/assets/profile.png"
          onClick={handleMenuOpen}
          className={styles.avatar}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}