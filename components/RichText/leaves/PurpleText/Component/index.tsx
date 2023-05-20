import React from 'react';
import useStyles from './css';

const PurpleHeadline: React.FC = ({ children }) => {
  const { purpleText } = useStyles();

  return (
    <span className={purpleText}>
      {children}
    </span>
  );
};

export default PurpleHeadline;
