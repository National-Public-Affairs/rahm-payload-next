/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import useStyles from './css';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import { Type as LegalType } from '../../../globals/Legal';
import GridContainer from '../GridContainer';
import Arrow from '../../graphics/Arrow';
import CMSLink from '../../Link';
import PolygonFive from '../../graphics/Polygons/PolygonFive';
import colors from '../../../css/colors';

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
  legal: LegalType;
}

const Footer: React.FC<Props> = ({ footer, socialMedia, legal }) => {
  const classes = useStyles();

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('legal data:', legal);
  console.log('footer data:', footer);
  console.log('social media data:', socialMedia);

  return (
    <footer className={classes.footer}>
      <GridContainer>
        <Grid>
          <Cell
            cols={12}
            colsM={8}
          >
            {/* disclaimer */}
            {
              footer.displayCopyright === 'yes' && (
                <div className={classes.disclaimerWrapper}>
                  <h6 className={classes.disclaimer}>
                    {legal.disclaimer}
                  </h6>
                </div>
              )
            }
            {/* org address */}
            {
              footer.displayAddress === 'yes' && (
                <div className={classes.addressWrapper}>
                  <p className={classes.address}>
                    {legal.address}
                  </p>
                </div>
              )
            }
          </Cell>
          {/* nav options */}
          {
            (Array.isArray(footer?.nav) && footer.nav.length) > 0 && (
              <Cell
                cols={12}
                colsM={8}
                className={classes.nav}
              >
                {
                  footer.nav.map(({ link }) => {
                    if (link.type === 'custom') {
                      return (
                        <CMSLink
                          key={link.label}
                          type="custom"
                          url={link.url}
                          label="footerNavOption"
                          className={classes.navLink}
                        >
                          <h4
                            className={classes.navOption}
                            onClick={backToTop}
                          >
                            {link.label}
                          </h4>
                          <PolygonFive
                            fillColor={colors.darkPurple}
                            className={classes.optPolygon}
                          />
                        </CMSLink>
                      );
                    }

                    return (
                      <CMSLink
                        key={link.label}
                        type="page"
                        page={link.page}
                        url={link.url}
                        label="footerNavOption"
                        className={classes.navLink}
                      >
                        <h4
                          onClick={backToTop}
                          className={classes.navOption}
                        >
                          {link.label}
                        </h4>
                        <PolygonFive
                          fillColor={colors.darkPurple}
                          className={classes.optPolygon}
                        />
                      </CMSLink>
                    );
                  })
                }
              </Cell>
            )
          }
          {/* copyright */}
          {
            footer.displayCopyright === 'yes' && (
              <Cell
                cols={12}
                colsM={8}
              >
                <div className={classes.copyrightWrapper}>
                  <p className={classes.copyright}>
                    &copy;
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    {legal.copyright}
                  </p>
                </div>
              </Cell>
            )
          }
        </Grid>
      </GridContainer>
      <button
        type="button"
        onClick={backToTop}
        className={classes.backToTop}
      >
        <Arrow className={classes.backToTopArrow} />
      </button>
    </footer>
  );
};

export default Footer;
