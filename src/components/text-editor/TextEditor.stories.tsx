// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import TextEditor from './TextEditor';
import React from 'react';
 
const meta: Meta<typeof TextEditor> = {
  component: TextEditor,
  tags: ['autodocs'],
  title: 'Components/TextEditor',
  argTypes: {
    value: {
      control: { type: 'text' }
    },
    onChange: {
      action: 'changed'
    },
  }
};

 
export default meta;

type Story = StoryObj<typeof TextEditor>;
 
export const Default: Story = {
  args: {
  },
  render: (args) => {
    const [value, setValue] = React.useState('');
    return <TextEditor {...args} value={value} onChange={setValue} />;
  }

};