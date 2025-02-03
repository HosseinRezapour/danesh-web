import React from 'react';
import SVG from 'react-inlinesvg';

const DynamicSVG = ({ src, defaultColor = 'black', hoverColor = 'orange' }) => {
    return (
        <div className="icon-container">
            <SVG
                src={src}
                className="icon"
                // style={{ fill: defaultColor, transition: 'fill 0.3s ease' }}
                fill={hoverColor}
            />
        </div>
    );
};

export default DynamicSVG;