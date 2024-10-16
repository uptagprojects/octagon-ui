import React, { FC, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    icon?: string;
}

const TextInput: FC<TextInputProps> = ({ errorMessage, icon, disabled, ...props }) => {
    return (
        <div className={`oct-text-input oct-text-input__container ${disabled ? 'oct-text-input--disabled' : ''} ${errorMessage ? "oct-text-input--has-error" : ""}`}>
            <div className="input-wrapper">
                {icon && <span className="icon">{icon}</span>}
                <input 
                    className={`text-input ${errorMessage ? 'error' : ''}`} 
                    disabled={disabled} 
                    {...props} 
                />
            </div>
            {errorMessage && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default TextInput;