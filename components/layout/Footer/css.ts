import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import transitions from '../../../css/transitions';
import { strokeWidth } from '../../../css/sizes';

export default createUseStyles({
  footer: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: base(8),
    padding: `${base(4)} 0`,
    background: colors.purple,
  },
  disclaimerWrapper: {
    margin: base(),
    display: 'grid',
    gridTemplate: '100% / 100%',
    textAlign: 'center',
  },
  disclaimer: {
    gridColumn: 1,
    gridRow: 1,
    justifySelf: 'center',
    alignSelf: 'center',
    margin: 0,
    padding: `${base(0.5)} ${base()}`,
    border: `1px solid ${colors.yellow}`,
  },
  addressWrapper: {
    margin: base(),
    display: 'grid',
    gridTemplate: '100% / 100%',
    textAlign: 'center',
  },
  address: {
    gridColumn: 1,
    gridRow: 1,
    justifySelf: 'center',
    alignSelf: 'center',
    margin: 0,
    padding: `${base(0.5)} ${base()}`,
  },
  nav: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    gap: base(3),
    color: colors.white,
    [queries.xs]: {
      flexFlow: 'row wrap',
    },
  },
  navLink: {
    display: 'grid',
    gridTemplate: '100% / 100%',
    minWidth: base(5.5),
    textDecoration: 'none',
    color: colors.white,
  },
  navOption: {
    position: 'relative',
    zIndex: 1,
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  optPolygon: {
    position: 'relative',
    zIndex: 0,
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
    width: '110%',
    transform: 'translate(0,25%)',
  },
  social: {
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    gap: base(2),
  },
  copyrightWrapper: {
    margin: base(),
    display: 'grid',
    gridTemplate: '100% / 100%',
    textAlign: 'center',
  },
  copyright: {
    gridColumn: 1,
    gridRow: 1,
    justifySelf: 'center',
    alignSelf: 'center',
    margin: 0,
    padding: `${base(0.5)} ${base()}`,
  },
  backToTop: {
    position: 'absolute',
    zIndex: 3,
    right: base(2),
    bottom: base(2),
    padding: base(),
    border: 0,
    borderRadius: '100%',
    background: colors.darkPurple,
    boxShadow: 'none',
    transition: `all ${transitions.default}ms linear`,
    cursor: 'pointer',
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    '&:hover': {
      opacity: 0.95,
      boxShadow: `inset 0 0 0 ${strokeWidth} ${colors.white}`,
    },
    [queries.m]: {
      display: 'none',
    },
  },
  backToTopArrow: {
    height: base(3),
    transform: 'rotate(-90deg)',
  },
});
