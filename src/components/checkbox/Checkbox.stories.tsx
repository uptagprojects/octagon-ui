// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
 
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    disabled: {
        control: { type: 'boolean' }
    }
  }
};

 
export default meta;

type Story = StoryObj<typeof Checkbox>;
 
export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
  }
};

export const DisabledCheckbox: Story = {
    args: {
      label: 'Check me',
      disabled: true
    }
};

export const CheckboxSizes: Story = {
    args: {
    },
    render: (args) => (
      <div>
        {[ "small", "medium", "large" ].map((size) => (
          <Checkbox {...args} size={size as 'small' | 'medium' | 'large'} label={`${size} checkbox`} />
        ))}
      </div>
    ),
  };