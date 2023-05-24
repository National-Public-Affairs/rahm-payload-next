import { GlobalConfig } from 'payload/types';

export type Type = {
  address: string;
  disclaimer: string;
  copyright: string;
}

const Legal: GlobalConfig = {
  slug: 'legal',
  label: 'Legal',
  fields: [
    {
      type: 'textarea',
      name: 'address',
      label: 'Address',
    },
    {
      type: 'textarea',
      name: 'disclaimer',
      label: 'Disclaimer',
    },
    {
      type: 'text',
      name: 'copyright',
      label: 'Copyright',
    },
  ],
};

export default Legal;
