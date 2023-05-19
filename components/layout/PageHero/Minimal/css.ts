import { createUseStyles } from 'react-jss';
import { label } from '../../../../css/type';
import { fadeInUp } from '../css';
import colors from '../../../../css/colors';
import { base } from '../../../../css/base';

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
  richText: {
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationDelay: '200ms',
  },
  wrap: {
    position: 'relative',
    zIndex: 1,
    padding: `${base(5)} 0`,
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -10,
    backgroundColor: colors.yellow,
    display: 'grid',
    gridTemplate: '100% / 100%',
  },
  polygon: {
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'center',
    alignSelf: 'center',
    zIndex: 20,
    width: '80%',
    height: '60%',
  },
});
