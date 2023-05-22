import { Block } from 'payload/types';

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
      fields: [
        {
          type: 'number',
          name: 'donationOption',
          label: 'Donation Option',
        },
      ],
      required: true,
    },
  ],
};
