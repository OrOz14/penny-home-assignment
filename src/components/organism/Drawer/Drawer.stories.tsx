import React from 'react';
import { Drawer } from './Drawer';
import { Card } from '../../molecules/Card';
import { Button } from '../../../components/atoms/Buttons';
import { DrawerFooter } from './DrawerFooter/DrawerFooter';

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

const children = (
  <div>
    <Card
      title="Autopay"
      description="After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically and on time."
      learnMoreLink="#"
    />
    <Card
      title="Request delivery details"
      description="We'll email your vendor to set their delivery method."
      action={<Button label="Send request" size="small" onClick={() => {}} />}
    />
  </div>
);

export const drawer = {
  args: {
    title: 'Vendor details',
    children,
  },
};

export const drawer_with_footer = {
  args: {
    title: 'Vendor details',
    children,
    footer: <DrawerFooter />,
  },
};
