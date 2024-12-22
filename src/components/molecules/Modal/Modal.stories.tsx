import React from 'react';
import { Modal } from './Modal';
import { Alert } from '../../../components/atoms/Icons/Alert';
import { ModalProps } from './Modal.types';

export default {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { default: 'Card', control: 'text' },
    description: { default: 'Description', control: 'text' },
    icon: { default: 'Button', control: 'text' },
  },
};

export const modal: Record<string, ModalProps> = {
  args: {
    title: 'Modal Header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    confirmButtonLabel: 'Delete',
    confirmButtonSkin: 'destructive',
    confirmButtonOnClick: () => {},
    cancelButtonLabel: 'Cancel',
    cancelButtonSkin: 'light',
  },
};

export const modal_with_icon = {
  args: {
    title: 'Modal Header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et, bibendum tellus. Aenean sed nibh lorem.',
    icon: <Alert />,
    confirmButtonLabel: 'Delete',
    confirmButtonSkin: 'destructive',
    confirmButtonOnClick: () => {},
    cancelButtonLabel: 'Cancel',
    cancelButtonSkin: 'light',
  },
};
