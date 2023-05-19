import React from 'react';
import useStyles from './css';

const MinimalWhiteHeadline: React.FC = ({ children }) => {
  const { whiteHeadline } = useStyles();

  return (
    <span className={whiteHeadline}>
      {children}
    </span>
  );
};

export default MinimalWhiteHeadline;
