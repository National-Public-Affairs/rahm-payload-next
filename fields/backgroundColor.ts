import { Field } from 'payload/types';

export type Type = 'orange' | 'red' | 'none' | 'blue' | 'gray';

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Purple',
      value: 'purple',
    },
    {
      label: 'Dark Purple',
      value: 'darkPurple',
    },
    {
      label: 'Yellow',
      value: 'yellow',
    },
    {
      label: 'White',
      value: 'white',
    },
  ],
};

export default backgroundColor;
