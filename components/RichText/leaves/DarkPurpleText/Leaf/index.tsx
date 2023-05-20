import React from 'react';
import colors from '../../../../../css/colors';

const DarkPurpleText: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      color: colors.darkPurple,
    }}
  >
    {children}
  </span>
);

export default DarkPurpleText;
