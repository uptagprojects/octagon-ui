import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Button from '../button/Button';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import Container from '../container/Container';

export default {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {},
    render: (args) => (
        <Card {...args}>
            <p>Hello World</p>
        </Card>
    )
};

export const CardWithHeaderAndFooter: Story = {
    args: {},
    render: (args) => (
        <Card {...args}>
            <CardHeader title="My Card" subtitle="My subtitle" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod deserunt, illum reprehenderit, corrupti accusamus fugiat doloribus, neque eos quam dignissimos velit! Dolorum quisquam delectus corporis ipsum repudiandae illum error?</p>
            <CardFooter>
                <Button label="read more" variant="tertiary" />
            </CardFooter>
        </Card>
    )
}

export const CardWithImage: Story = {
    args: {
        image: "https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
    },
    render: (args) => (
        <Card {...args}>
            <CardHeader title="My Card" subtitle="My subtitle" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod deserunt, illum reprehenderit, corrupti accusamus fugiat doloribus, neque eos quam dignissimos velit! Dolorum quisquam delectus corporis ipsum repudiandae illum error?</p>
            <CardFooter>
                <Button label="read more" variant="tertiary" />
            </CardFooter>
        </Card>
    )
};

export const MultipleCards: Story = {
    args: {
        image: "https://fastly.picsum.photos/id/887/1080/1080.jpg?hmac=IXWIoVlEZQ8-cgNhYwy1e-PubmGOz9GfJ60Uu0f6kTs"
    },
    render: (args) => (
        <Container>
            <Card {...args}>
                <CardHeader title="My Card" subtitle="My subtitle" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod deserunt, illum reprehenderit, corrupti accusamus fugiat doloribus, neque eos quam dignissimos velit! Dolorum quisquam delectus corporis ipsum repudiandae illum error?</p>
                <footer>
                    <Button label="read more" variant="tertiary" />
                </footer>
            </Card>
            <Card {...args}>
                <CardHeader title="My Card" subtitle="My subtitle" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod deserunt, illum reprehenderit, corrupti accusamus fugiat doloribus, neque eos quam dignissimos velit! Dolorum quisquam delectus corporis ipsum repudiandae illum error?</p>
                <footer>
                    <Button label="read more" variant="tertiary" />
                </footer>
            </Card>
            <Card {...args}>
                <CardHeader title="My Card" subtitle="My subtitle" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod deserunt, illum reprehenderit, corrupti accusamus fugiat doloribus, neque eos quam dignissimos velit! Dolorum quisquam delectus corporis ipsum repudiandae illum error?</p>
                <footer>
                    <Button label="read more" variant="tertiary" />
                </footer>
            </Card>
        </Container>
    )
};
