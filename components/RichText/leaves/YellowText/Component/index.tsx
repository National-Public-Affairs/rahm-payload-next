import React from 'react';
import useStyles from './css';

const YellowText: React.FC = ({ children }) => {
  const { yellowText } = useStyles();

  return (
    <span className={yellowText}>
      {children}
    </span>
  );
};

export default YellowText;
