import { createUseStyles } from 'react-jss';
import { htmlFontSize, baselinePX, base } from './base';
import colors from './colors';
import { h1, h2, h3, h4, h5, body } from './type';
import queries from './queries';
import { headerHeight } from './sizes';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
      color: colors.yellow,
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'freight-sans-compressed-pro, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.darkPurple,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base(3)}`,
      margin: `0 0 ${base()} 0`,
      marginBlockStart: base(2),
      fontSize: base(3),
    },
    li: {
      ...body,
    },
    // these classes aren't being applied
    // using style.css as a workaround for the moment
    // 'rModal__modal-item': {
    //   opacity: 0,
    //   transition: `opacity ${transitions.modal}ms linear`,
    // },
    // 'rModal__modal-item--enterActive': {
    //   opacity: 1,
    // },
    // 'rModal__modal-item--enterDone': {
    //   opacity: 1,
    // },
  },
  app: {
    height: '100%',
    marginTop: headerHeight,
    [queries.m]: {
      marginTop: base(11),
    },
  },
});
