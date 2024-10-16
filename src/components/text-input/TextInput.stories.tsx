// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
 
import TextInput from './TextInput';
 
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
  title: 'Components/TextInput',
  argTypes: {
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'select' }
    },
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

type Story = StoryObj<typeof TextInput>;
 
export const Default: Story = {
  args: {
    label: 'username',
    placeholder: 'example'
  }
};

export const TextInputWithError: Story = {
    args: {
      label: 'username',
      placeholder: 'example',
      errorMessage: 'this is an error message'
    }
  };

export const TextInputTypes: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div>
      {[ 'text', 'email', 'password' ].map((type) => (
        <TextInput {...args} type={type as 'text' | 'email' | 'password'} label={`${type} text input`} />
      ))}
    </div>
  ),
};

export const TextInputSizes: Story = {
  args: {
    type: 'text',
  },
  render: (args) => (
    <div>
      {[ "small", "medium", "large" ].map((size) => (
        <TextInput {...args} inputSize={size as 'small' | 'medium' | 'large'} label={`${size} button`} />
      ))}
    </div>
  ),
};

export const TextInputWithIcon: Story = {
  args: {
    icon: 'Activity',
  },
  render: (args) => (
    <div>
      {[ "small", "medium", "large" ].map((type) => (
        <TextInput {...args} inputSize={type as 'small' | 'medium' | 'large'} label={`${type} text input`} />
      ))}
    </div>
  ),
}


export const TextInputWithHiddenLabel: Story = {
    args: {
        label: 'search label hidden',
        hideLabel: true,
        icon: 'Search',
        placeholder: "search"
    },
}