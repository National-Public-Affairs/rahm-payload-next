import React, { Fragment } from 'react';
import Footer from '../Footer';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import useStyles from './css';

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
}

const Template: React.FC<Props> = ({ children, footer, socialMedia }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {children}
      </div>
      <Footer
        footer={footer}
        socialMedia={socialMedia}
      />
    </Fragment>
  );
};

export default Template;
