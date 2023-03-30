import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main />

        <Footer />

        <div className="popup popup_type_profile">
          <div className="popup__conteiner">
            <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form" name="editprofile" novalidate>
              <input className="form__input form__input_type_name" id="name" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
              <span className="form__input-error" id="name-error"></span>
              <input className="form__input form__input_type_about" id="about" name="about" type="text" placeholder="Ваша профессия" required minlength="2" maxlength="200" />
              <span className="form__input-error" id="about-error"></span>
              <button className="form__button form__button-profile" type="submit">Сохранить</button>
            </form>
          </div>
        </div>


        <div className="popup popup_type_place">
          <div className="popup__conteiner">
            <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="form" name="editplace" novalidate>
              <input className="form__input form__input_type_placename" id="title" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
              <span className="form__input-error" id="title-error"></span>
              <input className="form__input form__input_type_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" id="link-error"></span>
              <button className="form__button form__button-place" type="submit">Создать</button>
            </form>
          </div>
        </div>


        <template className="card-template">
          <li className="element">
            <button className="element__trash" type="button" aria-label="Удалить"></button>
            <img className="element__pic" src="#" alt="#" />
            <div className="element__item">
              <h2 className="element__text"></h2>
              <div className="element__like-container">
                <button type="button" className="element__like-button" aria-label="Лайк"></button>
                <span className="element__like-counter">0</span>
              </div>
            </div>
          </li>
        </template>

        {/* <!-- попап картинка на весь экран--> */}
        <div className="popup popup_type_picture">
          <div className="popup__pic-block">
            <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
            <img className="popup__img" src="#" alt="#" />
            <p className="popup__description"></p>
          </div>
        </div>

        {/* <!-- попап подтверждения удаления карточки --> */}
        <div className="popup popup_type_delete-card">
            <div className="popup__conteiner">
              <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
              <h2 className="popup__title">Вы уверены?</h2>
              <form className="form margin-top" name ="deletecard">
                <button className="form__button" type="submit">Да</button>
              </form>
            </div>
        </div>

        {/* <!-- попап редактирования аватара--> */}
        <div className="popup popup_type_edit-avatar">
          <div className="popup__conteiner">
            <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="form" name="editavatar" novalidate>
              <input className="form__input form__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" id="avatar-error"></span>
              <button className="form__button form__button-avatar" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
