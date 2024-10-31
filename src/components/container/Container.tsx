import React, { FC, ReactNode } from 'react';
import "./Container.css";
interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    display?: boolean;
    center?: boolean;
}

const Container: FC<ContainerProps> = ({ children, display=false, center = false, className, ...props }) => (
    <section {...props} className={`oct-container ${center ? "oct-container--center" : ""} ${display ? "oct-container--display" : ""} ${className ?? ""}`}>
        {children}
    </section>
);

export default Container;