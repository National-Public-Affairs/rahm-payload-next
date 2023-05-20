import { Block } from 'payload/types';
import backgroundColor from '../../fields/backgroundColor';

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
    },
  ],
};


export default Content;
