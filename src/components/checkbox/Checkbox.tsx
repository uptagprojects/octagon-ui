import React, { InputHTMLAttributes } from "react";
import "./Checkbox.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label: string;
    size?: "small" | "medium" | "large";
}

const Checkbox: React.FC<CheckboxProps> = ({ label, size="medium", className, ...props }) => {
    return (
        <label className={`oct-checkbox oct-checkbox--${size} ${className ?? ''}`}>
            <input {...props} type="checkbox" className="oct-checkbox__input" />
            <span className="oct-checkbox__label">{label}</span>
        </label>
    );
};

export default Checkbox;
