import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { MediaType } from '../../../../collections/Media';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import useStyles from './css';
import Media from '../../../Media';
import { joinClassNames } from '../../../../css/joinClassNames';
import Gutter from '../../Gutter';

type Props = {
  content: unknown;
  foregroundMedia: MediaType;
  backgroundMedia: MediaType;
}

const HeroWithMedia: React.FC<Props> = ({
  content,
  foregroundMedia,
  backgroundMedia,
}) => {
  const classes = useStyles();
  console.log('foreground media:', foregroundMedia);
  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            cols={5}
            start={1}
            colsM={4}
            startM={1}
            className={classes.gridElement}
          >
            <div className={classes.foreground}>
              <Media
                {...foregroundMedia}
              />
            </div>
          </Cell>
          <Cell
            cols={6}
            start={6}
            colsM={8}
            startM={1}
            className={classes.gridElement}
          >
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
          {/* <Gutter left>
            <Media
              {...backgroundMedia}
            />
          </Gutter> */}
        </Grid>
      </GridContainer>
    </div>
  );
};

export default HeroWithMedia;
