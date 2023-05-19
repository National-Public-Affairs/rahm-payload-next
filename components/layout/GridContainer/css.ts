import { createUseStyles } from 'react-jss';
import { gridContainerWidth } from '../../../css/structure';
import queries from '../../../css/queries';
import { base } from '../../../css/base';

export default createUseStyles({
  gridContainer: {
    maxWidth: gridContainerWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    [queries.l]: {
      padding: base(1.5),
    },
    [queries.m]: {
      padding: base(2),
    },
  },
});
