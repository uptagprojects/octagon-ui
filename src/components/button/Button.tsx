import React from "react";
import { icons } from 'lucide-react';
import "./Button.css";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: keyof typeof icons;
}

const buttonSizes = {
  "small": 12,
  "medium": 16,
  "large": 24
}

const Button: React.FC<ButtonProps> = ({ label, type = "secondary", size = "medium", icon, fullWidth = false }) => {
  const LucideIcon = icons[icon as keyof typeof icons];
  return <button className={`oct-button oct-button--${type} oct-button--${size} ${fullWidth ? "oct-button--block" : ''}`}>
    {icon && <LucideIcon size={buttonSizes[size]} />}
    <span>{label}</span>
  </button>;
};

export default Button;
