import React from 'react';
import './Avatar.css';

interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50 }) => {
    return (
        <div role="img" aria-label={alt} className="oct-avatar" style={{ "--avatar-size": `${size}px`} as React.CSSProperties}>
			<div className="oct-avatar__image" style={{ "backgroundImage": `url(${src})` }} />
            <svg
				viewBox="0 0 320 320"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="oct-avatar--border"
			>
				<path
					d="M225.373 8H94.6274C88.2622 8 82.1577 10.5286 77.6569 15.0294L15.0294 77.6569C10.5286 82.1577 8 88.2622 8 94.6274V225.373C8 231.738 10.5286 237.842 15.0294 242.343L77.6568 304.971C82.1577 309.471 88.2622 312 94.6274 312H225.373C231.738 312 237.842 309.471 242.343 304.971L304.971 242.343C309.471 237.842 312 231.738 312 225.373V94.6274C312 88.2622 309.471 82.1577 304.971 77.6569L242.343 15.0294C237.842 10.5286 231.738 8 225.373 8Z"
					stroke="url(#paint0_radial_237_739)"
					strokeWidth="16"
					strokeLinejoin="round"
				/>
				<defs>
					<radialGradient
						id="paint0_radial_237_739"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(271.6 59.2) rotate(132.31) scale(379.71)"
					>
						<stop offset="0.19" stopColor="#DE8244" />
						<stop offset="0.375" stopColor="#E45C64" />
						<stop offset="0.55" stopColor="#B95587" />
						<stop offset="0.7" stopColor="#7D588F" />
						<stop offset="0.835" stopColor="#46547B" />
						<stop offset="1" stopColor="#2F4858" />
					</radialGradient>
				</defs>
			</svg>
        </div>
    );
};

export default Avatar;