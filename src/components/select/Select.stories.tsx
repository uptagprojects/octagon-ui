// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta: Meta<typeof Select> = {
    component: Select,
    tags: ['autodocs'],
    title: 'Components/Select',
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        },
        hideLabel: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Choose a fruit',
        children: (
            <>
                <option value={1}>Apple</option>
                <option value={2}>Banana</option>
                <option value={3}>Orange</option>
            </>
        )
    }
};

export const SelectWithError: Story = {
    args: {
        label: 'Choose a language',
        children: (
            <>
                <option value={1}>Go</option>
                <option value={2}>Rust</option>
                <option value={3}>Swift</option>
            </>
        ),
        errorMessage: 'this is an error message'
    }
};


export const SelectSizes: Story = {
    args: {
    },
    render: (args) => (
        <div>
            {["small", "medium", "large"].map((size) => (
                <Select {...args} size={size as 'small' | 'medium' | 'large'} label={`${size} select`}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>
            ))}
        </div>
    ),
};

export const SelectWithHiddenLabel: Story = {
    args: {
        label: 'search label hidden',
        hideLabel: true,
        children: (
            <>
                <option value={1}>name</option>
                <option value={2}>email</option>
                <option value={3}>last update</option>
            </>
        )
    },
}

export const SelectWithIcon: Story = {
    args: {
        label: "Filter by",
        icon: 'Filter',
        children: (
            <>
                <option value={1}>name</option>
                <option value={2}>area</option>
                <option value={3}>last update</option>
            </>
        )
    },
    render: (args) => (
        <div>
            {["small", "medium", "large"].map((size) => (
                <Select {...args} size={size as 'small' | 'medium' | 'large'} />
            ))}
        </div>
    ),
}