import React from 'react';
import RichText from '../../components/RichText';
import useStyles from './css';

export type Type = {
  blockType: 'content';
  blockName?: string;
  backgroundColor: 'none' | 'purple' | 'darkPurple' | 'yellow' | 'white';
  content: unknown;
}

export const Component: React.FC<Type> = ({
  content,
  backgroundColor,
}) => {
  const classes = useStyles({ backgroundColor });

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};
