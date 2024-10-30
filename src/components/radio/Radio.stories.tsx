// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
 
const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio',
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

type Story = StoryObj<typeof Radio>;
 
export const Default: Story = {
  args: {
    label: "radio",
  }
};

export const DisabledRadio: Story = {
    args: {
      label: 'click me',
      disabled: true
    }
};

export const RadioSizes: Story = {
    args: {
        name: 'radio',
    },
    render: (args) => (
      <div>
        {[ "small", "medium", "large" ].map((size) => (
          <Radio {...args} size={size as 'small' | 'medium' | 'large'} label={`${size} radio button`} />
        ))}
      </div>
    ),
  };