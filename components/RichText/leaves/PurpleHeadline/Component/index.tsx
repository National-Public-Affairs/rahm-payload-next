import React from 'react';
import useStyles from './css';

const PurpleHeadline: React.FC = ({ children }) => {
  const { purpleHeadline } = useStyles();

  return (
    <span className={purpleHeadline}>
      {children}
    </span>
  );
};

export default PurpleHeadline;
