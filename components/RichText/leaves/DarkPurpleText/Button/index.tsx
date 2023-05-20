import React from 'react';
import { LeafButton } from 'payload/components/rich-text';
import colors from '../../../../../css/colors';

const Button: React.FC = () => (
  <LeafButton format="dark-purple-text">
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: colors.darkPurple,
      }}
    />
  </LeafButton>
);

export default Button;
