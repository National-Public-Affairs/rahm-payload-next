import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import transitions from '../../../css/transitions';

export default createUseStyles({
  footer: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: base(8),
    background: colors.purple,
  },
  nav: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    gap: base(2),
  },
  social: {
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    gap: base(2),
  },
  backToTop: {
    position: 'absolute',
    zIndex: 3,
    right: base(2),
    bottom: base(2),
    border: 0,
    backgrond: 'none',
    boxShadow: 'none',
    transition: `opacity ${transitions.default}ms linear`,
    cursor: 'pointer',
    padding: 0,
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    '&:hover': {
      opacity: 0.5,
    },
    [queries.m]: {
      display: 'none',
    },
  },
  backToTopArrow: {
    transform: 'rotate(-90deg)',
  },
});
