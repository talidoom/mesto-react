import React from 'react';
import Image from './Image';

const Card = ({card}) => {
    return (
          <li className="element">
            <button className="element__trash" type="button" aria-label="Удалить"></button>
            <Image card={card} />
            <div className="element__item">
              <h2 className="element__text">{card.name}</h2>
              <div className="element__like-container">
                <button type="button" className="element__like-button" aria-label="Лайк"></button>
                <span className="element__like-counter">0</span>
              </div>
            </div>
          </li>
    );
};

export default Card;