import { icons } from 'lucide-react';
import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import "./TextInput.css";

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    errorMessage?: string;
    icon?: keyof typeof icons;
    type?: "search" | "text" | "email" | "password";
    size?: 'small' | 'medium' | 'large';
    hideLabel?: boolean;
    label: string;
}


const TextInput: FC<TextInputProps> = ({ errorMessage, icon, type="text", size="medium", hideLabel=false, disabled=false, className="", ...props }) => {
    const inputId = useMemo(() => globalThis.crypto.randomUUID(), []);
    const LucideIcon = icons[icon as keyof typeof icons];
    return (
        <div className={`oct-text-input oct-text-input--${size} ${hideLabel ? 'oct-text-input--hide-label' : ''} ${icon ? "oct-text-input--has-icon" : ""} ${disabled ? 'oct-text-input--disabled' : ''} ${errorMessage ? "oct-text-input--has-error" : ""}`}>
            <label className="oct-text-input__label" htmlFor={inputId}>{props.label}</label>
            <input
                id={inputId}
                type={type}
                className={`oct-text-input__input ${errorMessage ? 'error' : ''} ${className}`} 
                disabled={disabled} 
                {...props}
            />
            {icon && <LucideIcon className="oct-text-input__icon" />}
            {errorMessage && <span className="oct-text-input__error-message">{errorMessage}</span>}
        </div>
    );
};

export default TextInput;