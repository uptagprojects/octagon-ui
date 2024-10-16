import React from 'react';
import './Frame.css'; // Make sure to create a corresponding CSS file for styling

interface FrameProps {
    aspectRatio: "landscape" | "portrait" | "square"; // aspect ratio as width / height
    caption?: string;
    children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ aspectRatio, caption, children }) => {
    return (
        <figure className={`oct-frame oct-frame--container oct-frame--${aspectRatio} ${caption ? "oct-frame--has-caption" : ""}`}>
            <div className="oct-frame__content">{children}</div>
            {caption && <caption className="oct-frame__caption">{caption}</caption>}
        </figure>
    );
};

export default Frame;