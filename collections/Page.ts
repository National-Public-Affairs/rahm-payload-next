import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import meta, { Type as MetaType } from '../fields/meta';
import formatSlug from '../utilities/formatSlug';
import { Image } from '../blocks/Image/Config';
import { Type as ImageType } from '../blocks/Image/Component';
import { CallToAction } from '../blocks/CallToAction/Config';
import { Type as CallToActionType } from '../blocks/CallToAction/Component';
import { Content } from '../blocks/Content/Config';
import { Type as ContentType } from '../blocks/Content/Component';
import { MinimalHero } from '../blocks/MinimalHero/config';
import { Type as MinimalHeroType } from '../blocks/MinimalHero/Component';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import YellowHeadline from '../components/RichText/leaves/YellowHeadline';
import WhiteHeadline from '../components/RichText/leaves/WhiteHeadline';
import PurpleHeadline from '../components/RichText/leaves/PurpleHeadline';
import MinimalWhiteHeadline from '../components/RichText/leaves/MinimalWhiteHeadline';


export type Layout = CallToActionType | ContentType | ImageType | MinimalHeroType | SpacerType;

export type HeroType = 'minimal' | 'withMedia';

export type Type = {
  title: string;
  heroType: HeroType;
  heroContent?: unknown;
  minimalHeroContent?: unknown;
  foregroundMedia?: MediaType;
  backgroundMedia?: MediaType;
  slug: string;
  image?: MediaType;
  layout: Layout[];
  meta: MetaType;
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'With Media',
          value: 'withMedia',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'upload',
          name: 'foregroundMedia',
          label: 'Foreground Media',
          required: true,
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.heroType === 'withMedia',
          },
        },
        {
          type: 'upload',
          name: 'backgroundMedia',
          label: 'Background Media',
          required: true,
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.heroType === 'withMedia',
          },
        },
      ],
    },
    {
      type: 'richText',
      name: 'heroContent',
      label: 'Hero Content',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.heroType === 'withMedia',
        elements: [],
        leaves: [
          YellowHeadline,
          WhiteHeadline,
        ],
      },
    },
    {
      type: 'richText',
      name: 'minimalHeroContent',
      label: 'Hero Content',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.heroType === 'minimal',
        elements: [],
        leaves: [
          PurpleHeadline,
          MinimalWhiteHeadline,
        ],
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      blocks: [
        CallToAction,
        Content,
        Image,
        MinimalHero,
        Spacer,
      ],
    },
    meta,
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          formatSlug('title'),
        ],
      },
    },
  ],
};

export default Page;
