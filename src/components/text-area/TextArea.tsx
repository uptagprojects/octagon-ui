import React, { FC, forwardRef, InputHTMLAttributes, useMemo } from 'react';
import "./TextArea.css";

interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
    errorMessage?: string;
    size?: 'small' | 'medium' | 'large';
    hideLabel?: boolean;
    label: string;
    disabled?: boolean;
}

export type TextAreaRef = HTMLTextAreaElement;


const TextArea = forwardRef<TextAreaRef, TextAreaProps>(({ errorMessage, size="medium", hideLabel=false, disabled=false, className="", ...props }, ref) => {
    const inputId = useMemo(() => globalThis.crypto.randomUUID()
    , []);

    return (
        <div className={`oct-text-area oct-text-area--${size} ${hideLabel ? 'oct-text-area--hide-label' : ''}  ${disabled ? 'oct-text-area--disabled' : ''} ${errorMessage ? "oct-text-area--has-error" : ""}`}>
            <label className="oct-text-area__label" htmlFor={inputId}>{props.label}</label>
            <textarea
                {...props}
                ref={ref}
                id={inputId}
                className={`oct-text-area__input ${errorMessage ? 'error' : ''} ${className}`} 
                disabled={disabled} 
            />
            {errorMessage && <span className="oct-text-area__error-message">{errorMessage}</span>}
        </div>
    );
});

export default TextArea;