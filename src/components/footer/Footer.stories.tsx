import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {},
    render: () => (
        <Footer>
            <p>Made with ❤️ by PNFi</p>
        </Footer>
    )
};

export const Centered: Story = {
    args: {},
    render: () => (
        <Footer center>
            <p>Made with ❤️ by PNFi</p>
        </Footer>
    )
};