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
      defaultValue: 'yes',
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
      defaultValue: 'yes',
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
      maxRows: 5,
      fields: [
        link,
      ],
    },
    {
      type: 'radio',
      name: 'displaySocial',
      label: 'Display social links?',
      defaultValue: 'no',
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
      defaultValue: 'yes',
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
