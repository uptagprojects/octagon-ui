import React, { ReactNode } from 'react';
import "./Card.css";

interface CardProps {
    size?: "small" | "medium" | "large";
    alt?: string;
    children: ReactNode;
    image?: string;
    aspectRatio?: "square" | "portrait" | "landscape";
    footer?: ReactNode;
}



const Card: React.FC<CardProps> = ({
    size = "small",
    children,
    image,
    alt,
    aspectRatio = "landscape"
}) => {
    return (
        
        <article className={`oct-card oct-card--${size} oct-card--${aspectRatio} ${image ? 'oct-card--image' : ''}`}>
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