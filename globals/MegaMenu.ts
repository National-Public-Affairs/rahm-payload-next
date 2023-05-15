import { GlobalConfig } from 'payload/types';
import link, { Type as LinkType } from '../fields/link';

export type Type = {
  nav: {
    link: LinkType
  }[]
}

const Nav: GlobalConfig = {
  slug: 'mega-menu',
  label: 'Mega Menu',
  access: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation Options',
      type: 'array',
      required: true,
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      maxRows: 8,
      fields: [
        link,
      ],
    },
  ],
};

export default Nav;
