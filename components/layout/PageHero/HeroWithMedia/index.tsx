import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { MediaType } from '../../../../collections/Media';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import useStyles from './css';
import Media from '../../../Media';
import { joinClassNames } from '../../../../css/joinClassNames';

type Props = {
  content?: unknown;
  foregroundMedia: MediaType;
  backgroundMedia: MediaType;
}

const HeroWithMedia: React.FC<Props> = ({
  content,
  foregroundMedia,
  backgroundMedia,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer className={classes.gridContainer}>
        <Grid>
          <Cell
            cols={4}
            start={1}
            colsL={4}
            startL={1}
            colsM={3}
            startM={1}
            className={classes.gridElement}
          >
            <Media
              {...foregroundMedia}
            />
          </Cell>
          <Cell
            cols={8}
            start={5}
            colsL={6}
            startL={5}
            colsM={5}
            startM={4}
            className={classes.gridElement}
          >
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
      <Media
        {...backgroundMedia}
        className={classes.backgroundMedia}
        clipMask="one"
      />
    </div>
  );
};

export default HeroWithMedia;
