import React, { FC, ReactNode } from 'react';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import TextInput from '../text-input/TextInput';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

type DatePickerProps = {
    children?: ReactNode;
    label: string;
    hideLabel?: boolean;
} & ReactDatePickerProps;

const Container: FC<DatePickerProps> = ({ children, className, label, hideLabel, ...props }) => {
    return (
        <ReactDatePicker
            {...props}
            className={`oct-date-picker ${props.selectsRange ? "oct-date-picker--range" : ""}`}
            calendarClassName={`oct-date-picker__calendar`}
            monthsShown={1}
            customInput={<TextInput icon="Calendar" className={className} label={label} hideLabel={hideLabel} disabled={props.disabled} />}
            >
                {children}
        </ReactDatePicker>
    );
}

export default Container;