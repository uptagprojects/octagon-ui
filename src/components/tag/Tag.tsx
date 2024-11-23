import React from "react";
import { icons } from 'lucide-react';
import "./Tag.css";
import { TagColor } from "./TagColors";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
    icon?: keyof typeof icons;
	color?: TagColor;
	outline?: boolean;
	variant?: "light" | "medium" | "dark";
}

enum ColorVariantNumber {
	"light" = 100,
	"medium" = 200,
	"dark" = 300
}

enum TextColorVariantNumber {
	"light" = 700,
	"medium" = 800,
	"dark" = 900
}


const Tag: React.FC<TagProps> = ({ label, icon, color = "magenta", variant="medium", outline=false, className, style={}, ...props }) => {
    const LucideIcon = icons[icon as keyof typeof icons];
	const tagStyles = {
		"--tag-color": `var(--${color}-${ColorVariantNumber[variant]})`,
		"--tag-text-color": `var(--${color}-${TextColorVariantNumber[variant]})`,
		...style } as React.CSSProperties;
	return (
		<mark {...props} className={`oct-tag oct-tag--${color} ${className ?? ''} ${outline ? "oct-tag--outline" : ''}`} style={tagStyles}>
            {icon && <LucideIcon className="oct-tag__icon" />} {label}
		</mark>
	);
};

export default Tag;