import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

export default {
    title: 'Components/Avatar',
    tags: ['autodocs'],
    component: Avatar,
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: "https://fastly.picsum.photos/id/1027/200/200.jpg?hmac=fiXlkLLwYm7JmmU80uRIj9g21XD4q9v_lM_2Z57UhuA",
        alt: 'Default Avatar',
        size: 120
    }
};

export const Sizes: Story = {
    args: {
        src: "https://avatar.iran.liara.run/public/39",
        alt: "Placeholder Avatar",
    },
    render: (args) => (
        <div>
            {[ 32, 48, 64, 120, 320 ].map((size) => (
                <Avatar {...args} size={size} />
            ))}
        </div>
    ),
}
