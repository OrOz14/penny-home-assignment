import { TextButton } from './TextButton';

export default {
  title: 'Buttons/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const standard = {
  args: {
    text: 'Learn more',
  },
};

export const standard_with_underline = {
  args: {
    text: 'Text Button',
    decoration: 'underline',
  },
};
