import { Block } from 'payload/types';
import backgroundColor from '../../fields/backgroundColor';
import PurpleText from '../../components/RichText/leaves/PurpleText';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      admin: {
        leaves: [
          PurpleText,
        ],
      },
    },
  ],
};


export default Content;
