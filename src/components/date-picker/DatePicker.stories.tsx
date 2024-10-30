import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
    title: 'Components/DatePicker',
    tags: ['autodocs'],
    component: DatePicker,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        },
    }
} as Meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {
    },
    render: (args) => {
        const [startDate, setStartDate] = useState(new Date());
        return (
        <DatePicker
            {...args}
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            dateFormat={"dd/MM/yyyy"}
         />
        )
    }
};


export const PickRange: Story = {
    args: {},
    render: (args) => {
        const [startDate, setStartDate] = useState<Date>(new Date());
        const [endDate, setEndDate] = useState<Date>();

        return (
            <DatePicker
                {...args}
                selectsRange
                selected={startDate}
                onChange={([sd, ed]) => {
                    setStartDate(sd as Date);
                    setEndDate(ed as Date | undefined);
                }}
                startDate={startDate}
                endDate={endDate}
                dateFormat={"dd/MM/yyyy"}
                selectsMultiple={undefined}
            />
        )
    }
}


export const PickWithLimitedRange: Story = {
    args: {},
    render: (args) => {
        const [startDate, setStartDate] = useState<Date>(new Date());
        const [endDate, setEndDate] = useState<Date>();

        return (
            <DatePicker
                {...args}
                selectsRange
                selected={startDate}
                onChange={([sd, ed]) => {
                    setStartDate(sd as Date);
                    setEndDate(ed as Date | undefined);
                }}
                startDate={startDate}
                endDate={endDate}
                dateFormat={"dd/MM/yyyy"}
                minDate={new Date()}
                selectsMultiple={undefined}
            />
        )
    }
}
