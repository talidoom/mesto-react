import React from 'react';
import Card from './Card';
import api from '../utils/Api';

const Main = ({cards, onCardClick, onEditProfile, onAddPlace, onEditAvatar}) => {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }, [])

    return (
        <main className="content">

          <section className="profile">
            <div className="profile__container">
              <img 
                src={userAvatar} 
                className="profile__avatar" 
                alt="Аватар" 
              />
              <div className="profile__overlay">
                <button 
                  className="profile__edit-avatar"
                  onClick={onEditAvatar}
                />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__job">{userDescription}</p>
              </div>
              <button 
                className="profile__edit-button" 
                type="button" 
                aria-label="Редактировать"
                onClick={onEditProfile}
              />
            </div>
            <button 
              className="profile__add-button" 
              type="submit" 
              aria-label="Добавить"
              onClick={onAddPlace}
            />
          </section>

          <section className="elements">
            <ul className="elements__list" aria-label="Фотографии путешествий">
            {cards.map(card => {
                return (
                <Card 
                  card={card} 
                  key={card._id} 
                  onCardClick={onCardClick}
                />)
            })}
            </ul>
          </section>
          
        </main>
    );
};

export default Main