import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import color from 'color';
import GridContainer from '../../components/layout/GridContainer';
import PolygonTwo from '../../components/graphics/Polygons/PolygonTwo';
import colors from '../../css/colors';
import useStyles from './css';

export type DonationOption = {
  amount: number;
}

export type Type = {
  blockType: 'donation';
  blockName?: string;
  cta: string;
  donationOptions: DonationOption[];
}

export const Component: React.FC<Type> = ({ cta, donationOptions }) => {
  const classes = useStyles();
console.log('cta', cta);
  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            
          >
            this is the donation block.
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
