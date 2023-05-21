import React from 'react';
import colors from '../../../../../css/colors';

const WhiteText: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      color: colors.white,
    }}
  >
    {children}
  </span>
);

export default WhiteText;
