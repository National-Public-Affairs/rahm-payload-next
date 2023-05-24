import { GlobalConfig } from 'payload/types';

export type Type = {
  address: string;
  disclaimer: string;
  copyright: string;
}

const Legal: GlobalConfig = {
  slug: 'legal',
  label: 'Legal',
  access: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    read: () => true,
  },
  fields: [
    {
      type: 'textarea',
      name: 'disclaimer',
      label: 'Disclaimer',
    },
    {
      type: 'textarea',
      name: 'address',
      label: 'Address',
    },
    {
      type: 'text',
      name: 'copyright',
      label: 'Copyright',
    },
  ],
};

export default Legal;
