import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import { headerHeight, strokeWidth } from '../../../css/sizes';
import queries from '../../../css/queries';
import zIndex from '../../../css/zIndex';
import transitions from '../../../css/transitions';
import breakpoints from '../../../css/breakpoints';
import boxShadows from '../../../css/boxShadows';

export default createUseStyles({
  header: {
    padding: `${base(1)} ${base(2)}`,
    backgroundColor: colors.purple,
    zIndex: zIndex.header,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    boxShadow: boxShadows.standard,
    [queries.m]: {
      padding: base(1),
      pointerEvents: 'none',
    },
  },
  headerContent: {
    maxWidth: `${breakpoints.l}px`,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: base(1.5),
    height: base(1.5),
    display: 'block',
  },
  headerOptions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: base(3),
    textTransform: 'uppercase',
    [queries.m]: {
      display: 'none',
    },
  },
  menuButton: ({ menuActive }) => ({
    pointerEvents: 'all',
    background: colors.darkPurple,
    transition: 'all 200ms linear',
    width: base(3),
    height: base(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    border: 0,
    boxShadow: `inset 0 0 0 ${menuActive ? strokeWidth : '0px'} ${menuActive ? colors.white : colors.darkPurple}`,
    cursor: 'pointer',

    '@media (min-width: 851px)': {
      display: 'none',
    },
    // '&:focus': {
    //   outline: 'none',
    //   background: color(colors.gray).lighten(0.8).hex(),
    // },
    // '&:active': {
    //   outline: 'none',
    //   background: color(colors.gray).lighten(1.2).hex(),
    // },
  }),
  menu: {
    background: colors.yellow,
    position: 'relative',
    padding: `${headerHeight} 0 0`,
    border: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    [queries.m]: {
      overflowY: 'auto',
      padding: `${headerHeight} ${base(1.5)} 0`,
    },
  },
  navLinks: {
    [queries.m]: {
      position: 'relative',
      zIndex: 1,
      marginBottom: base(12),
      pointerEvents: 'none',
      '& a': {
        pointerEvents: 'all',
      },
    },
  },
  primaryNavItem: {
    color: colors.white,
    textDecoration: 'none',
    boxShadow: '0px 0px 0px 0px rgba(240, 163, 41, 0)',
    '&:hover': {
      transition: `all ${transitions.default}ms linear`,
      color: colors.yellow,
      boxShadow: `0px ${base(0.5)} 0px 0px rgba(240, 163, 41, 1)`,
    },
    '&:active': {
      color: colors.darkPurple,
    },
  },
  secondaryNavItem: {
    color: colors.darkPurple,
    textDecoration: 'none',
    '&:hover': {
      transition: `all ${transitions.default}ms linear`,
      color: colors.white,
    },
  },
  logo: {
    pointerEvents: 'all',
  },
  ctaWrap: {
    position: 'fixed',
    right: base(-5),
    bottom: base(-8),
    [queries.m]: {
      display: 'block',
      right: base(-3),
      bottom: base(-6),
    },
    [queries.s]: {
      right: base(-2),
      bottom: base(-2),
      marginBottom: base(-3),
    },
  },

  ctaCSS: {
    width: `${base(35)} !important`,
    height: `${base(35)} !important`,
    [queries.l]: {
      width: `${base(30)} !important`,
      height: `${base(30)} !important`,
    },
    [queries.m]: {
      width: `${base(22)} !important`,
      height: `${base(22)} !important`,
    },
  },
});
