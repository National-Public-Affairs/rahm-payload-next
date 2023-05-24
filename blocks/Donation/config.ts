import { Block } from 'payload/types';
import link from '../../fields/link';

export const Donation: Block = {
  slug: 'donation',
  labels: {
    singular: 'Donation Block',
    plural: 'Donation Blocks',
  },
  fields: [
    {
      type: 'text',
      name: 'cta',
      label: 'Call to Action',
      required: true,
    },
    {
      type: 'array',
      name: 'donationOptions',
      label: 'Donation Options',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          type: 'number',
          name: 'donationOption',
          label: 'Donation Option',
        },
        link,
      ],
      required: true,
    },
  ],
};
