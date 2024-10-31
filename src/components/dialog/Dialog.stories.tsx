import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean' }
        }
    }
} as Meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {
        open: true,
        actionLabel: "Aceptar",
        closeLabel: "Cerrar",
    },
    render: (args) => (
        <Dialog {...args}>
            <p>Hola mundooo</p>
        </Dialog>
    )
};