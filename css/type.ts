import { base, htmlFontSize } from './base';
import queries from './queries';

const headingWeight = {
  fontWeight: '700',
  fontStyle: 'normal',
};

const bodyWeight = {
  fontWeight: '400',
};

export const h1 = {
  ...headingWeight,
  fontSize: base(6),
  lineHeight: base(4),
  margin: `0 0 ${base(2)}`,
  [queries.l]: {
    fontSize: base(5),
  },
  [queries.m]: {
    fontSize: base(6),
  },
  [queries.s]: {
    fontSize: base(4),
    lineHeight: base(3),
  },
  [queries.xs]: {
    fontSize: base(3),
    lineHeight: base(2),
  },
};

export const h2 = {
  ...headingWeight,
  fontSize: base(4.25),
  lineHeight: base(5),
  margin: `${base(2)} 0`,
};

export const h3 = {
  ...headingWeight,
  fontSize: base(3.5),
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`,
  [queries.m]: {
    fontSize: base(3),
    lineHeight: base(2),
  },
  [queries.s]: {
    fontSize: base(2.5),
    lineHeight: base(1.5),
  },
  [queries.xs]: {
    fontSize: base(2),
    lineHeight: base(0.85),
  },
};

export const h4 = {
  ...headingWeight,
  fontSize: base(2.25),
  lineHeight: base(2.5),
  margin: `${base(1.5)} 0 ${base()}`,
};

export const h5 = {
  ...headingWeight,
  fontSize: base(1.625),
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`,
};

export const h6 = {
  ...headingWeight,
  fontSize: base(1.25),
  lineHeight: base(0.95),
};

export const body = {
  ...bodyWeight,
  fontSize: htmlFontSize,
  lineHeight: base(1.5),
};

export const largeBody = {
  ...bodyWeight,
  fontSize: 22,
  lineHeight: base(2.25),
  margin: `${base(0.5)} 0`,
  [queries.m]: {
    lineHeight: base(1.86),
  },
};

export const label = {
  fontSize: 15,
  lineHeight: base(2.4),
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
};
