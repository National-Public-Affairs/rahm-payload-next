import React from 'react';
import useStyles from './css';

const YellowHeadline: React.FC = ({ children }) => {
  const { yellowHeadline } = useStyles();

  return (
    <span className={yellowHeadline}>
      {children}
    </span>
  );
};

export default YellowHeadline;
