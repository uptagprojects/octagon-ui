import React, { FC, ReactNode } from 'react';
import "./Footer.css";
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    center?: boolean;
    className?: string;
}

const Footer: FC<FooterProps> = ({ children, center = false, className, ...props }) => (
    <footer {...props} className={`oct-footer ${center ? "oct-footer--center" : ""} ${className ?? ""}`}>
        {children}
    </footer>
);

export default Footer;