import React from 'react';
import useStyles from './css';

const WhiteHeadline: React.FC = ({ children }) => {
  const { whiteHeadline } = useStyles();

  return (
    <span className={whiteHeadline}>
      {children}
    </span>
  );
};

export default WhiteHeadline;
