import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import { TagColorValues } from './TagColors';

export default {
    title: 'Components/Tag',
    tags: ['autodocs'],
    component: Tag,
    argTypes: {
        color: {
            options: TagColorValues,
            control: { type: 'select' }
        }
    }
} as Meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        label: "text",
    }
};

export const Icon: Story = {
    args: {
        label: "text",
        icon: "AirVent"
    }
};



export const Colors: Story = {
  args: {
    label: 'color',
  },
  render: (args) => (
    <div>
      {TagColorValues.map((color) => ["light", "medium", "dark"].map((variant) => (
        <Tag {...args} variant={variant as "light" | "medium" | "dark"} color={color} />
      )))}
    </div>
  ),
};

export const Outlines: Story = {
  args: {
    label: 'color',
    outline: true
  },
  render: (args) => (
    <div>
      {TagColorValues.map((color) => ["light", "medium", "dark"].map((variant) => (
        <Tag {...args} variant={variant as "light" | "medium" | "dark"} color={color} />
      )))}
    </div>
  ),
};