import React, { useEffect, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean' }
        }
    }
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        open: true,
        actionLabel: "Aceptar",
        closeLabel: "Cerrar",
    },
    render: (args) => (
        <Modal {...args}>
            <p>Hola mundooo</p>
        </Modal>
    )
};