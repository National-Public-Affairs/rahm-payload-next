import { createUseStyles } from 'react-jss';
import { base } from '../../../css/base';

export default createUseStyles({
  header: {
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: base(8),
    width: `${(parseInt(base(8), 10) * 1.569)}rem`,
  },
  menuButton: {
    
  },
});
