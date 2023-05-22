import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import RichText from '../../components/RichText';
import GridContainer from '../../components/layout/GridContainer';
import useStyles from './css';
import { MediaType } from '../../collections/Media';
import Media from '../../components/Media';

export type Type = {
  blockType: 'content';
  blockName?: string;
  backgroundColor: 'none' | 'purple' | 'darkPurple' | 'yellow' | 'white';
  accentMediaToggle: 'none' | 'withMedia';
  accentMedia: MediaType;
  accentMediaPosition: 'left' | 'right';
  content: unknown;
}

export const Component: React.FC<Type> = ({
  content,
  backgroundColor,
  accentMediaToggle,
  accentMedia,
  accentMediaPosition,
}) => {
  const classes = useStyles({ backgroundColor, accentMediaPosition });

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell>
            <RichText content={content} />
          </Cell>
        </Grid>
      </GridContainer>
      {
        accentMediaToggle === 'withMedia' && (
          <Media
            {...accentMedia}
            clipMask="two"
            className={classes.accentMedia}
          />
        )
      }
    </div>
  );
};
