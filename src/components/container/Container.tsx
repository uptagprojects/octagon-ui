import React, { FC, ReactNode } from 'react';
import "./Container.css";
interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    center?: boolean;
}

const Container: FC<ContainerProps> = ({ children, center = false, className, ...props }) => (
    <section {...props} className={`oct-container ${center ? "oct-container--center" : ""} ${className ?? ""}`}>
        {children}
    </section>
);

export default Container;