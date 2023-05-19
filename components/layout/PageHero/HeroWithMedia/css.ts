import { createUseStyles } from 'react-jss';
import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { fadeInUp, twistFadeIn } from '../css';

export default createUseStyles({
  '@keyframes fade-in-up': {
    ...fadeInUp,
  },
  '@keyframes twist-fade-in': {
    ...twistFadeIn,
  },
  wrap: {
    margin: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  gridContainer: {
    zIndex: 1,
  },
  afterLoad: {},
  richText: {
    '& > *': {
      animationName: '$fade-in-up',
      animationDuration: '800ms',
      animationTimingFunction: 'ease',
      animationFillMode: 'both',
      '&:nth-child(1)': {
        animationDelay: '10ms',
      },
      '&:nth-child(2)': {
        animationDelay: '200ms',
      },
    },
  },
  media: {
    position: 'relative',
    zIndex: -1,
    marginTop: base(-4.25),
    animationName: '$fade-in-up',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationDelay: '300ms',

    [queries.m]: {
      marginTop: base(1),
    },
  },
  gridElement: {
    alignSelf: 'end',
  },
  backgroundMedia: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '75%',
    zIndex: -10,
    opacity: 0.2,
    animationName: '$twist-fade-in',
    animationDuration: '800ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
  },
});
