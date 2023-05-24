import React, { Fragment } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../../components/layout/GridContainer';
import PolygonThree from '../../components/graphics/Polygons/PolygonThree';
import PolygonFour from '../../components/graphics/Polygons/PolygonFour';
import { Type as LinkType } from '../../fields/link';
import CMSLink from '../../components/Link';
import colors from '../../css/colors';
import useStyles from './css';

export type DonationOption = {
  donationOption: number;
  link: LinkType;
}

export type Type = {
  blockType: 'donation';
  blockName?: string;
  cta: string;
  donationOptions: DonationOption[];
}

export const Component: React.FC<Type> = ({ cta, donationOptions }) => {
  const classes = useStyles();

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
                donationOptions && donationOptions.map((opt, idx) => {
                  if (opt.link.type === 'custom') {
                    return (
                      <CMSLink
                        key={opt.donationOption + idx}
                        type="custom"
                        url={opt.link.url}
                        label="donationOption"
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
                      </CMSLink>
                    );
                  }

                  return (
                    <CMSLink
                      key={opt.donationOption + idx}
                      type="page"
                      page={opt.link.page}
                      url={opt.link.url}
                      label="donationOption"
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
                    </CMSLink>
                  );
                })
              }
            </Cell>
          </Grid>
        </GridContainer>
      </div>
    </Fragment>
  );
};
