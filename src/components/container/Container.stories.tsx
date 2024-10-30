import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import TextInput from '../text-input/TextInput';
import Checkbox from '../checkbox/Checkbox';
import Button from '../button/Button';
import Card from '../card/Card';

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
                <Card>
                    <TextInput label="Name" size="small" />
                    <Checkbox label="I agree to the terms and conditions" size="small" />
                    <Button size="small" label="submit" />
                </Card>
                <Card>
                    <TextInput label="Name" size="medium" />
                    <Checkbox label="I agree to the terms and conditions" size="medium" />
                    <Button size="medium" label="submit" />
                </Card>
                <Card>
                    <TextInput label="Name" size="large" />
                    <Checkbox label="I agree to the terms and conditions" size="large" />
                    <Button size="large" label="submit" />
                </Card>
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