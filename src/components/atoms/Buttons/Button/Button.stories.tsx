import React from 'react';
import { Add } from '../../Icons';
import { Button } from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const standard = {
  args: {
    label: 'Button',
  },
};

export const light = {
  args: {
    label: 'Button',
    skin: 'light',
  },
};

export const destructive = {
  args: {
    label: 'Button',
    skin: 'destructive',
  },
};

export const standard_small = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export const light_small = {
  args: {
    label: 'Button',
    skin: 'light',
    size: 'small',
  },
};

export const destructive_small = {
  args: {
    label: 'Button',
    skin: 'destructive',
    size: 'small',
  },
};

export const standard_with_icon = {
  args: {
    label: 'Prefix',
    prefix: <Add />,
  },
};

export const destructive_with_icon = {
  args: {
    label: 'Sufix',
    skin: 'destructive',
    sufix: <Add />,
  },
};
