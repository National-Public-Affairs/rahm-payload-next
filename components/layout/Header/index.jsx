import React from 'react';
import Link from 'next/link';
import { useModal } from '@faceless-ui/modal';
import Logo from '../../graphics/Logo';
import Hamburger from './Hamburger';
import useStyles from './css';

const menuSlug = 'menu';

const Header = () => {
  const { isModalOpen, toggleModal } = useModal();
  const menuActive = isModalOpen('menu');
  const classes = useStyles({ menuActive });

  return (
    <header className={classes.header}>
      <Link
        href="/"
      >
        <Logo className={classes.logo} />
      </Link>
      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggleModal(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>
    </header>
  );
};

export default Header;
