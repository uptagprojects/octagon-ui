// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Progress from './Progress';
 
const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ['autodocs'],
  title: 'Components/Progress',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    max: {
        control: { type: 'number' }
    },
    value: {
        control: { type: 'number' }
    }
  }
};

 
export default meta;

type Story = StoryObj<typeof Progress>;
 
export const Default: Story = {
  args: {
    label: "hola",
    hideLabel: true
  }
};


export const ProgressSizes: Story = {
    args: {
        max: 100,
        value: 50,
        label: "progress"
    },
    render: (args) => (
      <div>
        {[ "small", "medium", "large" ].map((size) => (
          <Progress {...args} size={size as 'small' | 'medium' | 'large'}/>
        ))}
      </div>
    ),
  };