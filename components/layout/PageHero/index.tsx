import React from 'react';
import { HeroType } from '../../../collections/Page';
import { MediaType } from '../../../collections/Media';
import RichText from '../../RichText';
import HeroWithMedia from './HeroWithMedia';
import Minimal from './Minimal';
import { ShowAfterFirstRender } from '../../ShowAfterFirstRender';

type Props = {
  title: string;
  type: HeroType;
  content?: unknown;
  minimalHeroContent?: unknown;
  foregroundMedia?: MediaType;
  backgroundMedia?: MediaType;
}

const PageHero: React.FC<Props> = ({
  title,
  type,
  content,
  minimalHeroContent,
  foregroundMedia,
  backgroundMedia,
}) => {
  if (type === 'withMedia') {
    return (
      <ShowAfterFirstRender>
        <HeroWithMedia
          foregroundMedia={foregroundMedia}
          backgroundMedia={backgroundMedia}
          content={content}
        />
      </ShowAfterFirstRender>
    );
  }

  if (type === 'minimal') {
    return (
      <ShowAfterFirstRender>
        <Minimal content={minimalHeroContent} />
      </ShowAfterFirstRender>
    );
  }

  return (
    <div>
      <RichText content={content} />
    </div>
  );
};

export default PageHero;
