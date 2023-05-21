import { Block } from 'payload/types';
import backgroundColor from '../../fields/backgroundColor';
import PurpleText from '../../components/RichText/leaves/PurpleText';
import DarkPurpleText from '../../components/RichText/leaves/DarkPurpleText';
import YellowText from '../../components/RichText/leaves/YellowText';
import WhiteText from '../../components/RichText/leaves/WhiteText';

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
          DarkPurpleText,
          YellowText,
          WhiteText,
        ],
      },
    },
  ],
};


export default Content;
