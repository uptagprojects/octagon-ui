import React from 'react';
import './Navbar.css';
interface NavbarProps {
    brand: React.ReactNode;
    children: Array<React.ReactNode>;
    callToAction?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ brand, children, callToAction }) => {
    return (
        <nav className="oct-navbar">
            <div className="oct-navbar__container">
                <div className="oct-navbar__header-wrapper">
                    <header className="oct-navbar__brand">
                        {brand}
                    </header>
                </div>
                <div className="oct-navbar__actions">
                    <ul className="oct-navbar__action oct-navbar__nav" role="menubar" aria-label="Menu">
                        {children}
                    </ul>
                    {callToAction}
                </div>
            </div>
            </nav>
    );
};

export default Navbar;