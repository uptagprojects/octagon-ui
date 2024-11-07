import React, { FC } from 'react';
import "./Switch.css";

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    hideLabel?: boolean;
    rightLabel?: string;
    active: boolean;
    size?: "small" | "medium" | "large";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ label, rightLabel, active, size = "medium", className, onChange=() => {}, hideLabel=false, ...props }) => {
    return (
        <label className={`oct-switch oct-switch--${size} ${hideLabel ? 'oct-switch--hide-label' : ''} ${className ?? ""}`}>
            <span className="oct-switch__label">{label}</span>
            <div className="oct-switch__container">
                <input {...props}
                    aria-label={label}
                    className="oct-switch__toggle"
                    type="checkbox"
                    checked={active}
                    onChange={onChange} />
                <span className="oct-switch__slider" />
            </div>
            <span className="oct-switch__label">{rightLabel}</span>
        </label>
    );
}
export default Switch;