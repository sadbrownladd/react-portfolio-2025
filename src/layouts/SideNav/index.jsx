import { Drawer, List, ListItemText, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './SideNav.module.css';

export default function SideNav({ open, setOpen }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    if (isMobile) setOpen(false);
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? open : true}
      onClose={() => setOpen(false)}
      sx={{
        width: isMobile ? 0 : 250,
        '& .MuiDrawer-paper': { width: 250, background: 'var(--bg-color)' },
      }}
    >
      <List className={styles.list}>
        {navItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            onClick={handleLinkClick}
          >
            <ListItemText primary={item.text} />
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}