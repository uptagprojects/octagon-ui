import React, { InputHTMLAttributes } from "react";
import "./Radio.css";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label: string;
    size?: "small" | "medium" | "large";
}

const Radio:React.FC<RadioProps> = ({ label, size="medium", className, ...props }) => {
    return (
        <label className={`oct-radio oct-radio--${size} ${className ?? ''}`}>
            <input {...props} type="radio" className="oct-radio__input" />
            <span className="oct-radio__label">{label}</span>
        </label>
    );
};

export default Radio;
