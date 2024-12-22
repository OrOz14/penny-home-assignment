import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Preview } from '@storybook/react';
import '../src/components/index.module.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;