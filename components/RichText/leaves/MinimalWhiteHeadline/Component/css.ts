import { createUseStyles } from 'react-jss';
import colors from '../../../../../css/colors';
import { h1 } from '../../../../../css/type';

export default createUseStyles({
  whiteHeadline: {
    ...h1,
    fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
    color: colors.white,
    textTransform: 'uppercase',
  },
});
