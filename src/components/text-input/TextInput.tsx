import { icons } from 'lucide-react';
import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import "./TextInput.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    icon?: keyof typeof icons;
    type?: "text" | "email" | "password";
    inputSize?: 'small' | 'medium' | 'large';
    hideLabel?: boolean;
    label: string;
}


const TextInput: FC<TextInputProps> = ({ errorMessage, icon, type="text", inputSize="medium", hideLabel=false, disabled=false, ...props }) => {
    const inputId = useMemo(() => globalThis.crypto.randomUUID(), []);
    const LucideIcon = icons[icon as keyof typeof icons];
    return (
        <div className={`oct-text-input oct-text-input--${inputSize} ${hideLabel ? 'oct-text-input--hide-label' : ''} ${icon ? "oct-text-input--has-icon" : ""} ${disabled ? 'oct-text-input--disabled' : ''} ${errorMessage ? "oct-text-input--has-error" : ""}`}>
            <label className="oct-text-input__label" htmlFor={inputId}>{props.label}</label>
            <input
                id={inputId}
                type={type}
                className={`oct-text-input__input ${errorMessage ? 'error' : ''}`} 
                disabled={disabled} 
                {...props}
            />
            {icon && <LucideIcon className="oct-text-input__icon" />}
            {errorMessage && <span className="oct-text-input__error-message">{errorMessage}</span>}
        </div>
    );
};

export default TextInput;