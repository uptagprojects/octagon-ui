import React, { useMemo } from "react";
import "./Progress.css"

interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
    label: string;
    hideLabel?: boolean;
    size: "small" | "medium" | "large";
    value?: number;
    max?: number;
}
const Progress: React.FC<ProgressProps> = ({ size="small", label, hideLabel=false, ...props }) => {
    const inputId = useMemo(() => globalThis.crypto.randomUUID(), []);
    return (
        <div className={`oct-progress oct-progress--${size} ${hideLabel ? 'oct-progress--hide-label' : ''}`}>
            <label htmlFor={inputId} className="oct-progress__label">{label}</label>
            <progress {...props} id={inputId} className="oct-progress__bar" />
        </div>
    );
}

export default Progress;