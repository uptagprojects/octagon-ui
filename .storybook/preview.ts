import React from 'react';
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set the initial theme
      current: 'light'
    }
  }
};

export default preview;
