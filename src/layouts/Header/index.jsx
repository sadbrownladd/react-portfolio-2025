import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Header.module.css';

export default function Header() {
  const { title } = usePageTitle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
        <Avatar
          alt="Profile"
          src="https://via.placeholder.com/40" // Replace with your profile image
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