import { createUseStyles } from 'react-jss';
import { label } from '../../css/type';
import { fadeInUp } from '../../components/layout/PageHero/css';
import colors from '../../css/colors';
import { base } from '../../css/base';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  title: {
    ...label,
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
  },
  wrap: {
    position: 'relative',
    zIndex: 1,
    margin: `${base(5)} 0 0 0`,
    color: colors.white,
  },
  cta: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  optionsWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    gap: base(3),
    color: colors.white,
  },
  donationOpt: {
    display: 'grid',
    gridTemplate: '100% / 100%',
    minWidth: base(5.5),
  },
  donationAmount: {
    position: 'relative',
    zIndex: 1,
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  optPolygon: {
    position: 'relative',
    zIndex: 0,
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
    transform: 'translate(0,25%)',
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -10,
    backgroundColor: colors.darkPurple,
    display: 'grid',
    gridTemplate: '100% / 100%',
  },
  polygon: {
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
    zIndex: 20,
    height: '175%',
  },
});
