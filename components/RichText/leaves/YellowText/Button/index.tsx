import React from 'react';
import { LeafButton } from 'payload/components/rich-text';
import colors from '../../../../../css/colors';

const Button: React.FC = () => (
  <LeafButton format="yellow-text">
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: colors.yellow,
      }}
    />
  </LeafButton>
);

export default Button;
