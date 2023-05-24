import React, { Fragment } from 'react';
import Footer from '../Footer';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import { Type as LegalType } from '../../../globals/Legal';
import useStyles from './css';

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
  legal: LegalType;
}

const Template: React.FC<Props> = ({
  children,
  footer,
  socialMedia,
  legal,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {children}
      </div>
      <Footer
        footer={footer}
        socialMedia={socialMedia}
        legal={legal}
      />
    </Fragment>
  );
};

export default Template;
