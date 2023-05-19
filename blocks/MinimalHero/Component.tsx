import React from 'react';
import color from 'color';
import RichText from '../../components/RichText';
import GridContainer from '../../components/layout/GridContainer';
import PolygonTwo from '../../components/graphics/Polygons/PolygonTwo';
import colors from '../../css/colors';
import useStyles from './css';

export type Props = {
  content: unknown;
}

const MinimalPageHero: React.FC<Props> = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <RichText
          className={classes.richText}
          content={content}
        />
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

export default MinimalPageHero;
