import React from 'react';
import color from 'color';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import PolygonTwo from '../../../graphics/Polygons/PolygonTwo';
import useStyles from './css';
import colors from '../../../../css/colors';

type Props = {
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
