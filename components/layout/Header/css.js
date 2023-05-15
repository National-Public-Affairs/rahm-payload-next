import { createUseStyles } from 'react-jss';
import color from 'color';
import { base } from '../../../css/base';
import { strokeWidth, headerHeight } from '../../../css/sizes';
import colors from '../../../css/colors';

export default createUseStyles({
  header: {
    padding: base(2),
    backgroundColor: colors.purple,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: base(8),
    width: `${(parseInt(base(8), 10) * 1.569)}rem`,
  },
  menuButton: ({ menuActive }) => ({
    pointerEvents: 'all',
    background: menuActive ? colors.yellow : colors.darkPurple,
    transition: 'all 200ms linear',
    width: base(3),
    height: base(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: '100%',
    boxShadow: `inset 0 0 0 ${strokeWidth} ${menuActive ? colors.white : colors.purple}`,
    cursor: 'pointer',
    // '&:focus': {
    //   outline: 'none',
    //   background: color(colors.purple).lighten(0.8).hex(),
    // },
    // '&:active': {
    //   outline: 'none',
    //   background: color(colors.yellow).lighten(1.2).hex(),
    // },
  }),
});