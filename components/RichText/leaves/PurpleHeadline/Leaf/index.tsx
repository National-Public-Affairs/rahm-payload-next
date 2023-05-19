import React from 'react';
import colors from '../../../../../css/colors';
import { base } from '../../../../../css/base';

const WhiteHeadline: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: base(6),
      fontWeight: 700,
      lineHeight: base(7),
      color: colors.purple,
      textTransform: 'uppercase',
      backgroundColor: colors.yellow,
    }}
  >
    {children}
  </span>
);

export default WhiteHeadline;
