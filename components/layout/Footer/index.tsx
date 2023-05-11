import React from 'react';
// import { Props } from './types';
import useStyles from './css';

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        Logo
      </div>
      <div>
        Menu
      </div>
    </footer>
  );
};

export default Footer;
