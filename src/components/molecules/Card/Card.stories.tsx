import React from 'react';
import { Card } from './Card';
import { BankTransfer } from '../../atoms/Icons';
import { Button } from '../../atoms/Buttons/Button';

export default {
  title: 'Cards/Card',
  component: Card,
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

export const card = {
  args: {
    title: 'Autopay',
    description:
      'After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically and on time.',
  },
};

export const card_with_icon = {
  args: {
    title: 'Autopay',
    description:
      'After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically.',
    action: <Button label="Send request" size="small" onClick={() => {}} />,
  },
};

export const card_with_icon_and_action = {
  args: {
    title: 'Autopay',
    description:
      'After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically.',
    icon: <BankTransfer />,
    action: <Button label="Send request" size="small" onClick={() => {}} />,
  },
};

export const card_with_icon_action_and_note = {
  args: {
    title: 'Autopay',
    description:
      'After receiving your first eBill, you can set up AutoPay to have future eBills paid automatically.',
    icon: <BankTransfer />,
    action: <Button label="Send request" size="small" onClick={() => {}} />,
    note: 'Deposit funds into your vendor’s bank account.',
  },
};
