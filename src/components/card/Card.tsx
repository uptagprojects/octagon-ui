import React, { ReactNode } from 'react';
import "./Card.css";

interface CardProps {
    alt?: string;
    hover?: boolean;
    children: ReactNode;
    className?: string;
    image?: string;
    aspectRatio?: "square" | "portrait" | "landscape";
    footer?: ReactNode;
}



const Card: React.FC<CardProps> = ({
    hover = true,
    children,
    className,
    image,
    alt,
    aspectRatio = "landscape"
}) => {
    return (
        <article className={`oct-card oct-card--${aspectRatio} ${hover ? 'oct-card--hoverable' : ''} ${image ? 'oct-card--image' : ''} ${className ?? ''}`}>
            {image && (
                <div className="oct-card__image">
                    <img src={image} alt={alt || 'Card image'} />
                </div>
            )}
            <div className="oct-card__content">
                {children}
            </div>
        </article>
    );
};





export default Card;