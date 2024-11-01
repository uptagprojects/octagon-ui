// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
 
const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
  title: 'Components/Switch',
  argTypes: {
    active: {
        control: { type: 'boolean' }
    },
    label: {
        control: { type: 'text' }
    },
    rightLabel: {
        control: { type: 'text' }
    },
  }
};

 
export default meta;

type Story = StoryObj<typeof Switch>;
 
export const Default: Story = {
  args: {
    active: false,
    label: "off",
    rightLabel: "on",
  }
};


export const SwitchSizes: Story = {
  args: {
    active: true,
    label: "public"
  },
  render: (args) => (
      <div>
          {["small", "medium", "large"].map((size) => (
              <Switch {...args} key={size} size={size as "small" | "medium" | "large"} />
          ))}
      </div>
  ),
};
