import React, { useId, useMemo } from "react";
import "./Progress.css"

interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
    label: string;
    hideLabel?: boolean;
    size: "small" | "medium" | "large";
    value?: number | null;
    max?: number;
}
const Progress: React.FC<ProgressProps> = ({ size="small", label, hideLabel=false, value=null, max=1, ...props }) => {
    const inputId = useId();
    return (
        <div className={`oct-progress oct-progress--${size} ${hideLabel ? 'oct-progress--hide-label' : ''}`}>
            <label htmlFor={inputId} className="oct-progress__label">{label}</label>
            <progress {...props} value={value ?? undefined} max={max} id={inputId} className="oct-progress__bar" />
        </div>
    );
}

export default Progress;