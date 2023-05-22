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
      type: 'radio',
      name: 'accentMediaToggle',
      label: 'Dispaly Accent Media',
      defaultValue: 'none',
      admin: {
        layout: 'horizontal',
      },
      options: [
        {
          value: 'none',
          label: 'None',
        },
        {
          value: 'withMedia',
          label: 'With Media',
        },
      ],
    },
    {
      type: 'upload',
      name: 'accentMedia',
      label: 'Accent Media',
      required: true,
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData?.accentMediaToggle === 'withMedia',
      },
    },
    {
      type: 'radio',
      name: 'accentMediaPosition',
      label: 'Accent Media Positioning',
      defaultValue: 'left',
      required: true,
      admin: {
        layout: 'horizontal',
        condition: (_, siblingData) => siblingData?.accentMediaToggle === 'withMedia',
      },
      options: [
        {
          value: 'left',
          label: 'Left',
        },
        {
          value: 'right',
          label: 'Right',
        },
      ],
    },
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
