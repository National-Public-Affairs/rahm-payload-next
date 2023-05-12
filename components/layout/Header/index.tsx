import React from 'react';
import { Props } from './types';
import Logo from '../../graphics/Logo';
import useStyles from './css';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div>
        Menu
      </div>
    </header>
  );
};

export default Header;
