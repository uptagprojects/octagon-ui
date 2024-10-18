// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
 
import TextArea from './TextArea';
 
const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    hideLabel: {
      control: { type: 'boolean' }
    },
    disabled: {
        control: { type: 'boolean' }
    }
  }
};

 
export default meta;

type Story = StoryObj<typeof TextArea>;
 
export const Default: Story = {
  args: {
    label: "new post",
    placeholder: "example"
  }
};

export const TextAreaWithError: Story = {
    args: {
      label: 'Comment',
      placeholder: 'example',
      errorMessage: 'this is an error message'
    }
  };

export const TextAreaSizes: Story = {
  args: {
    label: "Comment"
  },
  render: (args) => (
    <div>
      {[ "small", "medium", "large" ].map((size) => (
        <TextArea {...args} size={size as 'small' | 'medium' | 'large'} label={`${size} text area`} />
      ))}
    </div>
  ),
};
export const TextAreaWithHiddenLabel: Story = {
    args: {
        label: 'post with hidden label',
        hideLabel: true,
        placeholder: "type here"
    },
} 