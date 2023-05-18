import React from 'react';
import { HeroType } from '../../../collections/Page';
import { MediaType } from '../../../collections/Media';
import RichText from '../../RichText';
import HeroWithMedia from './HeroWithMedia';
import { ShowAfterFirstRender } from '../../ShowAfterFirstRender';

type Props = {
  title: string;
  type: HeroType;
  content: unknown;
  foregroundMedia?: MediaType;
  backgroundMedia?: MediaType;
}

const PageHero: React.FC<Props> = ({
  title,
  type,
  content,
  foregroundMedia,
  backgroundMedia,
}) => {
  console.log('type:', type);
  console.log('PageHero index.tsx content:', content);
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

  return (
    <div>
      <RichText content={content} />
    </div>
  );
};

export default PageHero;
