import React from 'react';
import Link from 'next/link';
import { Props } from './types';
import Logo from '../../graphics/Logo';
import useStyles from './css';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link
        href="/"
        className={classes.logo}
      >
        <Logo />
      </Link>
      <div>
        Menu
      </div>
    </header>
  );
};

export default Header;
