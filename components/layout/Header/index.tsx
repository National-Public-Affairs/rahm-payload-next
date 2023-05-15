import React from 'react';
import NextLink from 'next/link';
import { Modal, useModal } from '@faceless-ui/modal';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { Props } from './types';
import GridContainer from '../GridContainer';
import Logo from '../../graphics/Logo';
import Hamburger from './Hamburger';
import useStyles from './css';
import LargeBody from '../../type/LargeBody';
import Link from '../../Link';

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { isModalOpen, toggleModal } = useModal();
  const menuActive = isModalOpen('menu');
  const classes = useStyles({ menuActive });

  return (
    <header className={classes.header}>
      <NextLink
        href="/"
      >
        <Logo className={classes.logo} />
      </NextLink>

      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggleModal(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>

      <Modal
        slug={menuSlug}
        className={classes.menu}
      >
        <GridContainer>
          <Grid>
            <Cell
              cols={8}
              htmlElement="nav"
            >
              {
                megaMenu?.nav?.map(({ link }, i) => (
                  <Link
                    {...link}
                    key={i}
                    className={classes.primaryNavItem}
                  >
                    <h3
                      key={i}
                      style={{ marginTop: i === 0 ? 0 : undefined }}
                    >
                      {link.label}
                    </h3>
                  </Link>
                ))
              }
            </Cell>
            <Cell cols={3}>
              {
                socialMedia?.links?.map(({ label, url }) => (
                  <LargeBody key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.secondaryNavItem}
                    >
                      {label}
                    </a>
                  </LargeBody>
                ))
              }
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};

export default Header;
