import React from 'react';

const Main = () => {
    return (
        <main className="content">

          <section className="profile">
            <div className="profile__container">
              <img src="#" className="profile__avatar" alt="Аватар" />
              <div className="profile__overlay">
                <button className="profile__edit-avatar"></button>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__name">Лара Крофт</h1>
                <p className="profile__job">Исследователь, археолог</p>
              </div>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
            <button className="profile__add-button" type="submit" aria-label="Добавить"></button>
          </section>


          <section className="elements">
            <ul className="elements__list" aria-label="Фотографии путешествий">

            </ul>
          </section>
        </main>
    )
}

export default Main