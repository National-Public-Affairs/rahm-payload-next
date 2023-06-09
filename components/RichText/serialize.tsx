import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import PurpleText from './leaves/PurpleText/Component';
import DarkPurpleText from './leaves/DarkPurpleText/Component';
import YellowText from './leaves/YellowText/Component';
import WhiteText from './leaves/WhiteText/Component';
import YellowHeadline from './leaves/YellowHeadline/Component';
import WhiteHeadline from './leaves/WhiteHeadline/Component';
import PurpleHeadline from './leaves/PurpleHeadline/Component';
import MinimalWhiteHeadline from './leaves/MinimalWhiteHeadline/Component';

// eslint-disable-next-line no-use-before-define
type Children = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Children
  url?: string
  [key: string]: unknown
}

const serialize = (children: Children): React.ReactElement[] => children.map((node, i) => {
  if (Text.isText(node)) {
    let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    if (node.bold) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    // custom styling for purple text
    if (node['purple-text']) {
      text = (
        <PurpleText>
          {text}
        </PurpleText>
      );
    }

    // custom styling for dark purple text
    if (node['dark-purple-text']) {
      text = (
        <DarkPurpleText>
          {text}
        </DarkPurpleText>
      );
    }

    // custom styling for yellow text
    if (node['yellow-text']) {
      text = (
        <YellowText>
          {text}
        </YellowText>
      );
    }

    // custom styling for white text
    if (node['white-text']) {
      text = (
        <WhiteText>
          {text}
        </WhiteText>
      );
    }

    // custom styling for yellow hero headlines
    if (node['yellow-headline']) {
      text = (
        <YellowHeadline>
          {text}
        </YellowHeadline>
      );
    }

    // custom styling for white hero headlines
    if (node['white-headline']) {
      text = (
        <WhiteHeadline>
          {text}
        </WhiteHeadline>
      );
    }

    if (node['minimal-white-headline']) {
      text = (
        <MinimalWhiteHeadline>
          {text}
        </MinimalWhiteHeadline>
      );
    }

    // custom styling for purple hero headlines
    if (node['purple-headline']) {
      text = (
        <PurpleHeadline>
          {text}
        </PurpleHeadline>
      );
    }

    if (node.code) {
      text = (
        <code key={i}>
          {text}
        </code>
      );
    }

    if (node.italic) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    if (node.underline) {
      text = (
        <span
          style={{ textDecoration: 'underline' }}
          key={i}
        >
          {text}
        </span>
      );
    }

    if (node.strikethrough) {
      text = (
        <span
          style={{ textDecoration: 'line-through' }}
          key={i}
        >
          { text}
        </span>
      );
    }

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {serialize(node.children)}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={i}>
          {serialize(node.children)}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i}>
          {serialize(node.children)}
        </h3>
      );
    case 'h4':
      return (
        <h4 key={i}>
          {serialize(node.children)}
        </h4>
      );
    case 'h5':
      return (
        <h5 key={i}>
          {serialize(node.children)}
        </h5>
      );
    case 'h6':
      return (
        <h6 key={i}>
          {serialize(node.children)}
        </h6>
      );
    case 'quote':
      return (
        <blockquote key={i}>
          {serialize(node.children)}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i}>
          {serialize(node.children)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {serialize(node.children)}
        </ol>
      );
    case 'li':
      return (
        <li key={i}>
          {serialize(node.children)}
        </li>
      );
    case 'link':
      return (
        <a
          href={escapeHTML(node.url)}
          key={i}
        >
          {serialize(node.children)}
        </a>
      );

    default:
      return (
        <p key={i}>
          {serialize(node.children)}
        </p>
      );
  }
});

export default serialize;
