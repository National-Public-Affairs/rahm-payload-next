import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import color from 'color';
import RichText from '../../components/RichText';
import GridContainer from '../../components/layout/GridContainer';
import PolygonTwo from '../../components/graphics/Polygons/PolygonTwo';
import colors from '../../css/colors';
import useStyles from './css';

export type Type = {
  blockType: 'minimalHeroBlock';
  blockName?: string;
  minimalHeroBlockContent: unknown;
}

export const Component: React.FC<Type> = ({ minimalHeroBlockContent }) => {
  const classes = useStyles();
  console.log('minimal hero block content:', minimalHeroBlockContent);
  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            cols={10}
            start={3}
            colsM={6}
            startM={2}
          >
            <RichText
              className={classes.richText}
              content={minimalHeroBlockContent}
            />
          </Cell>
        </Grid>
      </GridContainer>
      <div className={classes.bg}>
        <PolygonTwo
          fillColor={color(colors.yellow).darken(0.1)}
          className={classes.polygon}
        />
      </div>
    </div>
  );
};
