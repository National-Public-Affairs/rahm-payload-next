import React from 'react';
import colors from '../../../../../css/colors';

const PurpleText: React.FC<any> = ({ attributes, children }) => (
  <span
    {...attributes}
    style={{
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      color: colors.purple,
    }}
  >
    {children}
  </span>
);

export default PurpleText;
