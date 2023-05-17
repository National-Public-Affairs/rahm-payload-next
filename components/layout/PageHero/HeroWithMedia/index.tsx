import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { MediaType } from '../../../../collections/Media';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import useStyles from './css';
import Media from '../../../Media';
import { joinClassNames } from '../../../../css/joinClassNames';

type Props = {
  content: unknown;
  media?: MediaType;
}

const HeroWithMedia: React.FC<Props> = ({ content, media }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell>
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default HeroWithMedia;
