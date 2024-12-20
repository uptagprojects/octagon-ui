import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import TextInput from '../text-input/TextInput';
import Checkbox from '../checkbox/Checkbox';
import Button from '../button/Button';
import Card from '../card/Card';
import FileUploader from '../file-uploader/FileUploader';
import Switch from '../switch/Switch';
import { ExternalLink } from 'lucide-react';

export default {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        display: {
            control: {
                type: 'boolean'
            }
        },
        align: {
            control: {
                type: 'select',
                options: ['left', 'right', 'center']
            }
        },
    }
} as Meta;

type Story = StoryObj<typeof Container>;

export const DefaultContainer: Story = {
    args: {
    },
    render:(args) => (
        <Container {...args}>
            <p>Hello World</p>
        </Container>
    )
};

export const ContainterAlignment: Story = {
    args: {
        display: false,
        children: (
            <>
                <header><h3>Title</h3></header>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
            </>
        )
    },
    render:(args) => (
        <>
            {[ "left", "center", "right" ].map((align) => (
                <Container {...args} align={align as 'left' | 'center' | 'right'} />
            ))}
        </>
    )
};

export const DisplayContainer: Story = {
    args: {
        display: true
    },
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <a>Animi<ExternalLink /></a>, corrupti culpa? Voluptate reiciendis repudiandae omnis molestiae ea, consequatur commodi. Veritatis nemo autem nisi at provident assumenda deleniti quae iusto molestias?</p>
                <p>About:
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi rem error officia perferendis placeat vel, beatae, numquam perspiciatis quod distinctio blanditiis. Vitae deserunt voluptatem atque saepe, possimus ab praesentium.</li>
                    </ul>
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Uno</th>
                            <th>Dos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
            <Container {...args}>
                <header><h3>Title</h3></header>
                <Card>
                    <TextInput label="Name" size="small" />
                    <Switch hideLabel active={true} label="status" size="small" />
                    <Checkbox label="I agree to the terms and conditions" size="small" />
                    <FileUploader label="Upload file" size="small" />
                    <Button variant='primary' size="small" label="submit" />
                </Card>
                <Card>
                    <TextInput label="Name" size="medium" />
                    <Switch hideLabel active={true} label="status" size="medium" />
                    <Checkbox label="I agree to the terms and conditions" size="medium" />
                    <FileUploader label="Upload file" size="small" />
                    <Button size="medium" label="submit" />
                </Card>
                <Card>
                    <TextInput label="Name" size="large" />
                    <Switch hideLabel active={true} label="status" size="large" />
                    <Checkbox label="I agree to the terms and conditions" size="large" />
                    <FileUploader label="Upload file" size="small" />
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