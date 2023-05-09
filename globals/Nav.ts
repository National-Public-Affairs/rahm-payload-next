import { GlobalConfig } from 'payload/types';

const Nav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'navItems',
      label: 'Navigation Options',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: ''
        },
      ],
    },
  ],
};

export default Nav;
