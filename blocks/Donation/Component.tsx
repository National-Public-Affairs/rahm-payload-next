import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import color from 'color';
import GridContainer from '../../components/layout/GridContainer';
import PolygonThree from '../../components/graphics/Polygons/PolygonThree';
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
console.log('donation options', donationOptions);
  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell className={classes.cta}>
            <h1>
              {cta}
            </h1>
          </Cell>
        </Grid>
      </GridContainer>
      <div className={classes.bg}>
        <PolygonThree
          fillColor={colors.purple}
          className={classes.polygon}
        />
      </div>
    </div>
  );
};
