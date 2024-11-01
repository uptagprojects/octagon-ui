import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        center: {
            control: {
                type: 'boolean'
            }
        }
    }
} as Meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        children: (
            <p>Made with ❤️ by PNFi</p>
        )
    },
    render: (args) => (
        <Footer {...args} />
    )
};

export const Centered: Story = {
    args: {},
    render: (args) => (
        <Footer center {...args}>
            <p>Made with ❤️ by PNFi</p>
        </Footer>
    )
};