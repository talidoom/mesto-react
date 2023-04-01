import React from 'react';
import Card from './Card';

const Main = ({cards, onClick}) => {
  
    return (
        <main className="content">

          <section className="profile">
            <div className="profile__container">
              <img src="#" className="profile__avatar" alt="Аватар" />
              <div className="profile__overlay">
                <button 
                  className="profile__edit-avatar"
                  onClick={onClick}
                />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__name">Лара Крофт</h1>
                <p className="profile__job">Исследователь, археолог</p>
              </div>
              <button 
                className="profile__edit-button" 
                type="button" 
                aria-label="Редактировать"
                onClick={onClick}
              />
            </div>
            <button 
              className="profile__add-button" 
              type="submit" 
              aria-label="Добавить"
              onClick={onClick}
            />
          </section>

          <section className="elements">
            <ul className="elements__list" aria-label="Фотографии путешествий">
            {cards.map(card => {
                return (<Card card={card} key={card._id} />)
            })}
            </ul>
          </section>
          
        </main>
    );
};

export default Main