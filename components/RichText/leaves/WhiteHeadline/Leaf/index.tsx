import React from 'react';
import colors from '../../../../../css/colors';
import { h1 } from '../../../../../css/type';

const WhiteHeadline: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{
      ...h1,
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      color: colors.white,
      textTransform: 'uppercase',
      backgroundColor: colors.darkPurple,
    }}
  >
    {children}
  </span>
);

export default WhiteHeadline;
