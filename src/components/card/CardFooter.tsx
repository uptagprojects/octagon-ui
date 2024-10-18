import React from "react";
interface CardFooterProps {
    children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => (
    <footer className="oct-card__footer">
        {children}
    </footer>
);

export default CardFooter;