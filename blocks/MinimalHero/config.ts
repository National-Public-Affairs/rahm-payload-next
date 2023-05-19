import { Block } from 'payload/types';
import PurpleHeadline from '../../components/RichText/leaves/PurpleHeadline';
import MinimalWhiteHeadline from '../../components/RichText/leaves/MinimalWhiteHeadline';

export const MinimalHero: Block = {
  slug: 'minimalHeroBlock',
  labels: {
    singular: 'Minimal Hero Block',
    plural: 'Minimal Hero Blocks',
  },
  fields: [
    {
      type: 'richText',
      name: 'minimalHeroBlockContent',
      label: 'Hero Content',
      required: true,
      admin: {
        elements: [],
        leaves: [
          PurpleHeadline,
          MinimalWhiteHeadline,
        ],
      },
    },
  ],
};
