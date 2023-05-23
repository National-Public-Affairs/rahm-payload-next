import React, { Fragment } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../../components/layout/GridContainer';
import PolygonThree from '../../components/graphics/Polygons/PolygonThree';
import PolygonFour from '../../components/graphics/Polygons/PolygonFour';
import colors from '../../css/colors';
import useStyles from './css';

export type DonationOption = {
  donationOption: number;
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
    <Fragment>
      <div className={classes.wrap}>
        <GridContainer>
          <Grid>
            <Cell className={classes.cta}>
              <h1 style={{ margin: 0 }}>
                {cta}
              </h1>
            </Cell>
          </Grid>
          <div className={classes.bg}>
            <PolygonThree
              fillColor={colors.purple}
              className={classes.polygon}
            />
          </div>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <Grid>
            <Cell
              cols={12}
              colsM={8}
              className={classes.optionsWrapper}
            >
              {
                donationOptions && donationOptions.map((opt, idx) => (
                  <div
                    key={opt.donationOption + idx}
                    className={classes.donationOpt}
                  >
                    <h3 className={classes.donationAmount}>
                      $
                      {opt.donationOption}
                    </h3>
                    <PolygonFour
                      fillColor={colors.yellow}
                      className={classes.optPolygon}
                    />
                  </div>
                ))
              }
            </Cell>
          </Grid>
        </GridContainer>
      </div>
    </Fragment>
  );
};
