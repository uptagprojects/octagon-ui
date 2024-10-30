import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from "./Alert";

export default {
    title: 'Components/Alert',
    tags: ['autodocs'],
    component: Alert
} as Meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        title: "Important",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, at adipisci! Maxime nihil voluptatibus, non natus obcaecati perspiciatis placeat sapiente sunt nobis voluptas ex, possimus recusandae sint accusantium incidunt ea."
    }
};

export const AlertTypes: Story = {
    args: {
        title: "Latest announcement",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, at adipisci! Maxime nihil voluptatibus, non natus obcaecati perspiciatis placeat sapiente sunt nobis voluptas ex, possimus recusandae sint accusantium incidunt ea."
    },
    render: (args) => (
        <div>
            {["info", "success", "warning", "error"]
                .map((type) => (
                    <Alert key={type} {...args} type={type as 'info' | 'success' | 'warning' | 'error'} />
                ))
            }
        </div>)
}
