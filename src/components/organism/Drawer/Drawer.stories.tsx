import React from 'react';
import { Drawer } from './Drawer';
import { DrawerFooter } from './DrawerFooter/DrawerFooter';
import { DrawerBody } from './DrawerBody/DrawerBody';

export default {
  title: 'Drawer/Drawer',
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { default: 'Card', control: 'text' },
    description: { default: 'Description', control: 'text' },
    icon: { default: 'Button', control: 'text' },
  },
};

export const drawer = {
  args: {
    title: 'Vendor details',
    children: <DrawerBody />,
  },
};

export const drawer_with_mobile_footer = {
  args: {
    title: 'Vendor details',
    children: <DrawerBody />,
    footer: <DrawerFooter />,
  },
};
