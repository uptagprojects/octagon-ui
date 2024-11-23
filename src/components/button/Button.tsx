import React, { ButtonHTMLAttributes } from "react";
import { icons } from 'lucide-react';
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: keyof typeof icons;
  hideLabel?: boolean;
}

const buttonSizes = {
  "small": 12,
  "medium": 16,
  "large": 24
}

const Button: React.FC<ButtonProps> = ({ label, variant = "secondary", size = "medium", icon, fullWidth = false, hideLabel = false, ...props }) => {
  const LucideIcon = icons[icon as keyof typeof icons];
  return <button aria-label={label} {...props} className={`oct-button oct-button--${variant} oct-button--${size} ${fullWidth ? "oct-button--block" : ''} ${hideLabel ? "oct-button--hidden-label" : ''}`}>
    {icon && <LucideIcon size={buttonSizes[size]} className="oct-button__icon" />}
    {!hideLabel && <span>{label}</span>}
  </button>;
};

export default Button;
