import React from "react";
import { icons } from 'lucide-react';
import "./Tag.css";
import { TagColor } from "./TagColors";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
    icon?: keyof typeof icons;
	color?: TagColor;
}

const Tag: React.FC<TagProps> = ({ label, icon, color = "magenta-400", className, style={}, ...props }) => {
    const LucideIcon = icons[icon as keyof typeof icons];
	const tagStyles = { "--tag-color": `var(--${color})`, ...style } as React.CSSProperties;
	return (
		<mark {...props} className={`oct-tag oct-tag--${color} ${className ?? ''}`} style={tagStyles}>
            {icon && <LucideIcon className="oct-tag__icon" />} {label}
		</mark>
	);
};

export default Tag;