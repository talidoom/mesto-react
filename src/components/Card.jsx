import React from 'react';

const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card)
  }

    return (
          <li className="element">
            <button className="element__trash" type="button" aria-label="Удалить"></button>
            <img 
                className="element__pic" 
                src={props.card.link} 
                alt={props.card.name}
                onClick={handleClick}
            />
            <div className="element__item">
              <h2 className="element__text">{props.card.name}</h2>
              <div className="element__like-container">
                <button type="button" className="element__like-button" aria-label="Лайк"></button>
                <span className="element__like-counter">0</span>
              </div>
            </div>
          </li>
    );
};

export default Card;