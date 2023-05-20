import React from 'react';
import useStyles from './css';

const DarkPurpleText: React.FC = ({ children }) => {
  const { darkPurpleText } = useStyles();

  return (
    <span className={darkPurpleText}>
      {children}
    </span>
  );
};

export default DarkPurpleText;
