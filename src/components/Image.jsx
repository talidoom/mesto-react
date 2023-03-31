import React from 'react';

const Image = ({card}) => {
    return (
            <img 
            className="element__pic" 
            src={card.link} 
            alt={card.name}
            />
    );
};

export default Image;