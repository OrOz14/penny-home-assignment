import React from 'react';
import { Button } from './Button';
import { ButtonTable } from '../../../../storybooks/ButtonTable';

export default {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const standard = {
  args: {
    label: 'Button',
  },
  parameters: {
    layout: 'centered',
  },
};

export const table = {
  render: () => <ButtonTable />,
};
