import { icons, LucideChevronDown } from "lucide-react";
import { SelectHTMLAttributes, useId, useMemo } from "react";
import "./Select.css";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label: string,
    icon?: keyof typeof icons;
    hideLabel?: boolean,
    errorMessage?: string,
    size?: "small" | "medium" | "large"
}
const Select: React.FC<SelectProps> = ({ label, hideLabel, icon, size="medium", disabled, children, errorMessage, ...props }) => {
    const inputId = useId();
    const LucideIcon = icons[icon as keyof typeof icons];
    return (
        <div className={`oct-select oct-select--${size} ${hideLabel ? 'oct-select--hide-label' : ''} ${icon ? "oct-select--has-icon" : ""} ${disabled ? 'oct-select--disabled' : ''} ${errorMessage ? "oct-select--has-error" : ""}`}>
            <label className="oct-select__label" htmlFor={inputId}>{label}</label>
            <select className="oct-select__select" {...props} id={inputId}>
                {children}
            </select>
            {icon && <LucideIcon className="oct-select__icon" />}
            <LucideChevronDown className="oct-select__right-chevron" />
            {errorMessage && <span className="oct-select__error-message">{errorMessage}</span>}
        </div>
    )
}

export default Select;