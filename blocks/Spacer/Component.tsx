import React from 'react';
import useStyles from './css';
import { Type } from '.';

export const Component: React.FC<Omit<Type, 'blockType'>> = ({
  size,
}) => {
  const classes = useStyles();

  return (
    <div className={classes[size]} />
  );
};
