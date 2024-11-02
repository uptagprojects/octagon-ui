import React, { FC, ReactNode } from 'react';
import "./Footer.css";
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

const Footer: FC<FooterProps> = ({ children, className, ...props }) => (
    <footer {...props} className={`oct-footer ${className ?? ""}`}>
        {children}
    </footer>
);

export default Footer;