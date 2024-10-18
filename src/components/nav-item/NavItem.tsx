import React from 'react';
import "./NavItem.css";

interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
    active?: boolean;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ active = false, className="", children, ...props }) => {
    return (
        <li {...props} className={`oct-nav-item ${active ? 'oct-nav-item--active' : ''} ${className}`} role="menuitem">
            {children}
        </li>
    );
};

export default NavItem;