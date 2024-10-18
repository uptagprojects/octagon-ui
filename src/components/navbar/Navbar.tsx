import React, { Fragment, useEffect } from 'react';
import './Navbar.css';
import TextInput from '../text-input/TextInput';
interface NavbarProps {
    brand: React.ReactNode;
    children: Array<React.ReactNode>;
    hideSearch?: boolean;
    searchValue?: string;
    onSearch?: (query: string) => void;
    callToAction?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ brand, children, hideSearch = true, onSearch = null, searchValue = "", callToAction }) => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');

    useEffect(() => {
        if (onSearch) {
            onSearch(searchQuery);
        }
    }, [searchQuery]);

    return (
        <nav className="oct-navbar">
            <div className="oct-navbar__container">
                <div className="oct-navbar__header-wrapper">
                    <header className="oct-navbar__brand">
                        {brand}
                    </header>
                    {!hideSearch && <TextInput type="search" icon="Search" className="oct-navbar__action oct-navbar__nav" label="search" hideLabel={true} onChange={(e) => setSearchQuery(e.target.value)} value={searchValue} />}
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