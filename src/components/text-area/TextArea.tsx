import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import "./TextAvatar.css";

interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    errorMessage?: string;
    size?: 'small' | 'medium' | 'large';
    hideLabel?: boolean;
    label: string;
}


const TextArea: FC<TextAreaProps> = ({ errorMessage, size="medium", hideLabel=false, disabled=false, ...props }) => {
    const inputId = useMemo(() => globalThis.crypto.randomUUID(), []);
    return (
        <div className={`oct-text-area oct-text-area--${size} ${hideLabel ? 'oct-text-area--hide-label' : ''}  ${disabled ? 'oct-text-area--disabled' : ''} ${errorMessage ? "oct-text-area--has-error" : ""}`}>
            <label className="oct-text-area__label" htmlFor={inputId}>{props.label}</label>
            <textarea
                id={inputId}
                className={`oct-text-area__input ${errorMessage ? 'error' : ''}`} 
                disabled={disabled} 
                {...props}
            />
            {errorMessage && <span className="oct-text-area__error-message">{errorMessage}</span>}
        </div>
    );
};

export default TextArea;