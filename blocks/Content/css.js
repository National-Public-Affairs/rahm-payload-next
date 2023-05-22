/* eslint-disable no-nested-ternary */
import { createUseStyles } from 'react-jss';
import colors from '../../css/colors';
import queries from '../../css/queries';
import { maxWidth } from '../../css/sizes';

export default createUseStyles({
  wrap: ({ backgroundColor }) => ({
    position: 'relative',
    maxWidth,
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
  accentMedia: ({ accentMediaPosition }) => ({
    position: 'absolute',
    [accentMediaPosition === 'left' ? 'left' : 'right']: '3%',
    top: '15%',
    zIndex: 0,
    width: '30%',
    maxWidth: 650,
    [queries.xxl]: {
      top: '25%',
      [accentMediaPosition === 'left' ? 'left' : 'right']: '2%',
      width: '20%',
    },
    [queries.xl]: {
      top: '30%',
      [accentMediaPosition === 'left' ? 'left' : 'right']: '-6%',
      width: '18%',
    },
    [queries.l]: {
      top: '30%',
      [accentMediaPosition === 'left' ? 'left' : 'right']: '-20%',
      width: '40%',
    },
  }),
  content: {
    zIndex: 2,
    position: 'relative',
  },
});
