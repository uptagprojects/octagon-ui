import React, { FC, ReactNode } from 'react';
import "./Container.css";
interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    display?: boolean;
    align?: "left" | "right" | "center";
    center?: boolean;
}

const Container: FC<ContainerProps> = ({ children, display=false, align = "left", className, ...props }) => (
    <section {...props} className={`oct-container oct-container--${align} ${display ? "oct-container--display" : ""} ${className ?? ""}`}>
        {children}
    </section>
);

export default Container;