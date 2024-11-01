import React, { FC } from 'react';
import "./Switch.css";

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    rightLabel?: string;
    active: boolean;
    size?: "small" | "medium" | "large";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<SwitchProps> = ({ label, rightLabel, active, size = "medium", className, onChange, ...props }) => {

    return (
        <label className={`oct-switch oct-switch--${size}`}>
            <span className="oct-switch__label">{label}</span>
            <div className="oct-switch__container">
                <input {...props}
                    className={`oct-switch__toggle ${className ?? ""}`}
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