import React, { useCallback } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import useStyles from './css';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import GridContainer from '../GridContainer';
import Arrow from '../../graphics/Arrow';

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
}

const Footer: React.FC<Props> = ({ footer, socialMedia }) => {
  const classes = useStyles();

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('footer data:', footer);
  console.log('social media data:', socialMedia);

  return (
    <footer className={classes.footer}>
      <GridContainer>
        <Grid>
          {
            (Array.isArray(footer?.nav) && footer.nav.length) > 0 && (
              <Cell
                cols={6}
                colsM={8}
                htmlElement="ul"
                className={classes.nav}
              >
                {
                  footer.nav.map(({ link }) => (
                    <li key={link.label}>
                      {link.label}
                    </li>
                  ))
                }
              </Cell>
            )
          }
          <Cell
            cols={6}
            colsM={8}
          >
            <div className={classes.section}>
              <ul className={classes.social}>
                {socialMedia?.links?.map(({ url, label }) => (
                  <li key={label}>
                    <a
                      className={classes.link}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className={classes.copyright}>
                &copy;
                {' '}
                {new Date().getFullYear()}
                {' '}
                Custom Website Series
              </p>
            </div>
          </Cell>
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
