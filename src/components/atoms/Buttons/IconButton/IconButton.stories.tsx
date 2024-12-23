import React from 'react';
import { Add, ToDo } from '../../Icons';
import { IconButton } from './IconButton';
import { Close } from '../../Icons';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const standard = {
  args: {
    icon: <Add />,
  },
};

export const close_light = {
  args: {
    icon: <Close />,
    variant: 'light',
    size: 'small',
  },
};

export const destructive = {
  args: {
    icon: <ToDo />,
    variant: 'destructive',
    size: 'medium',
  },
};
