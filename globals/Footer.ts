import { GlobalConfig } from 'payload/types';
import link, { Type as LinkType } from '../fields/link';

export type Type = {
  nav: {
    link: LinkType
  }[];
  displayAddress: 'yes' | 'no';
  displayCopyright: 'yes' | 'no';
  displayDisclaimer: 'yes' | 'no';
  displaySocial: 'yes' | 'no';
}

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    read: () => true,
  },
  fields: [
    {
      type: 'radio',
      name: 'displayDisclaimer',
      label: 'Display disclaimer?',
      options: [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
          label: 'No',
        },
      ],
    },
    {
      type: 'radio',
      name: 'displayAddress',
      label: 'Display organization address?',
      options: [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
          label: 'No',
        },
      ],
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        link,
      ],
    },
    {
      type: 'radio',
      name: 'displaySocial',
      label: 'Display social links?',
      options: [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
          label: 'No',
        },
      ],
    },
    {
      type: 'radio',
      name: 'displayCopyright',
      label: 'Display copyright?',
      options: [
        {
          value: 'yes',
          label: 'Yes',
        },
        {
          value: 'no',
          label: 'No',
        },
      ],
    },
  ],
};

export default Footer;
