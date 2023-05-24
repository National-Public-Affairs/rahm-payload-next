import React from 'react';
import payload from 'payload';
import { GetServerSideProps } from 'next';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/layout/Template';
import PageHero from '../components/layout/PageHero';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';


export type Props = {
  page?: PageType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
}

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;
  console.log('page data', props);
  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <PageHero
        title={page.title}
        type={page.heroType}
        content={page?.heroContent}
        minimalHeroContent={page?.minimalHeroContent}
        foregroundMedia={page?.foregroundMedia}
        backgroundMedia={page?.backgroundMedia}
      />
      <RenderBlocks layout={page.layout} />
    </Template>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'home';

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};
