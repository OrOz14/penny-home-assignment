import React from 'react';
import { Add, Refresh, ToDo } from '../../Icons';
import { IconButton } from './IconButton';
import { Close } from '../../Icons';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { default: 'Button', control: 'text' },
  },
};

export const standard = {
  args: {
    icon: <Add />,
  },
};

export const light = {
  args: {
    icon: <Refresh />,
    skin: 'light',
    size: 'small',
  },
};

export const close_light = {
  args: {
    icon: <Close />,
    skin: 'light',
    size: 'small',
  },
};

export const destructive = {
  args: {
    icon: <ToDo />,
    skin: 'destructive',
    size: 'medium',
  },
};
