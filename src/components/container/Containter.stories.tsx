import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

export default {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Container>;

export const DefaultContainer: Story = {
    args: {
        center: false
    },
    render:(args) => (
        <Container {...args}>
            <p>Hello World</p>
        </Container>
    )
};

export const CenteredContainer: Story = {
    args: {
        center: true,
    },
    render:(args) => (
        <Container {...args}>
            <header><h3>Title</h3></header>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
        </Container>
    )
};

export const HeaderContainer: Story = {
    args: {},
    render: (args) => (
        <Container {...args}>
            <header>
                <h3>Title</h3>
            </header>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
        </Container>
    )
};

export const MultipleContainers: Story = {
    args: {},
    render:(args) => (
        <div>
            <Container {...args}>
                <header><h3>Title</h3></header>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
            </Container>
            <Container {...args}>
                <header><h3>Title</h3></header>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
            </Container>
            <Container {...args}>
                <header><h3>Title</h3></header>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
            </Container>
        </div>
    )
};

export const NestedContainers: Story = {
    args: {},
    render:(args) => (
        <Container {...args}>
            <header><h3>Title</h3></header>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
            <Container {...args}>
                <header><h3>Title</h3></header>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
                <Container {...args}>
                    <header><h3>Title</h3></header>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
                </Container>
            </Container>
        </Container>
    )
};