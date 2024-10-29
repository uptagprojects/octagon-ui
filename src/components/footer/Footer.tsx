import React, { FC, ReactNode } from 'react';
import "./Footer.css";
import Container from '../container/Container';
interface FooterProps {
    children: ReactNode;
    center?: boolean;
}

const Footer: FC<FooterProps> = ({ children, center = false }) => (
    <footer className={`oct-footer`}>
        <Container className="oct-footer__container" center={center}>
            {children}
        </Container>
    </footer>
);

export default Footer;