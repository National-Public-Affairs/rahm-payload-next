import React from 'react';
import useStyles from './css';

const PurpleText: React.FC = ({ children }) => {
  const { purpleText } = useStyles();

  return (
    <span className={purpleText}>
      {children}
    </span>
  );
};

export default PurpleText;
