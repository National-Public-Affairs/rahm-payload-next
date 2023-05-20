/* eslint-disable no-nested-ternary */
import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';

export default createUseStyles({
  wrap: ({ backgroundColor }) => ({
    backgroundColor: backgroundColor === 'white'
      ? colors.white
      : backgroundColor === 'yellow'
        ? colors.yellow
        : backgroundColor === 'darkPurple'
          ? colors.darkPurple
          : backgroundColor === 'purple'
            ? colors.purple
            : 'transparent',
  }),
  content: {
    
  },
});
