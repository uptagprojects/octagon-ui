import React, { FC, ReactNode } from 'react';
import "./Container.css";
interface ContainerProps {
    children: ReactNode;
    center?: boolean;
}

const Container: FC<ContainerProps> = ({ children, center = false }) => {
    return <section className={`oct-container ${center ? "oct-container--center" : ""}`}>
        {children}
    </section>;
};

export default Container;