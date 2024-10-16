import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Frame from './Frame';

export default {
    title: 'Components/Frame',
    tags: ['autodocs'],
    component: Frame,
} as Meta;

type Story = StoryObj<typeof Frame>;

export const Default: Story = {
    args: {
        aspectRatio: "landscape"
    },
    render:(args) => (
        <Frame {...args}>
            <img
                src="https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
                />
        </Frame>
    )
};

export const Landscape: Story = {
    args: {
        aspectRatio: "landscape"
    },
    render:(args) => (
        <Frame {...args}>
            <img
                src="https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
                />
        </Frame>
    )
};

export const Square: Story = {
    args: {
        aspectRatio: "square",
    },
    render:(args) => (
        <Frame {...args}>
            <img
                src="https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
                />
        </Frame>
    )
};

export const Portrait: Story = {
    args: {
        aspectRatio: "portrait",
    },
    render:(args) => (
        <Frame {...args}>
            <img
                src="https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
                />
        </Frame>
    )
};


export const FrameWithCaption: Story = {
    args: {
        aspectRatio: "portrait",
        caption: "This is a caption"
    },
    render:(args) => (
        <Frame {...args}>
            <video
                src="https://videos.pexels.com/video-files/28829661/12488594_1440_2560_30fps.mp4"
                />
        </Frame>
    )
};
