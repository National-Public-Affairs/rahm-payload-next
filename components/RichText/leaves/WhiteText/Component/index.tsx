import React from 'react';
import useStyles from './css';

const WhiteText: React.FC = ({ children }) => {
  const { whiteText } = useStyles();

  return (
    <span className={whiteText}>
      {children}
    </span>
  );
};

export default WhiteText;
