import React from "react";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
        <Header />

        <Main 
        // onEditAvatar={onEditAvatar}
        // onEditProfile={onEditProfile}
        // onAddPlace={onAddPlace}
        // onCardClick={onCardClick}
        />

        <Footer />

        <PopupWithForm title={'Редактировать профиль'} name={'profile'}> 
          <input className="form__input form__input_type_name" id="name" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
          <span className="form__input-error" id="name-error"></span>
          <input className="form__input form__input_type_about" id="about" name="about" type="text" placeholder="Ваша профессия" required minlength="2" maxlength="200" />
          <span className="form__input-error" id="about-error"></span>
        </PopupWithForm>

        <PopupWithForm title={'Новове место'} name={'place'}> 
          <input className="form__input form__input_type_placename" id="title" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
          <span className="form__input-error" id="title-error"></span>
          <input className="form__input form__input_type_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="link-error"></span>
        </PopupWithForm>

        <PopupWithForm title={'Вы уверены?'} name={'delete-card'}/>

        <PopupWithForm title={'Обновить аватар?'} name={'edit-avatar'}> 
          <input className="form__input form__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="avatar-error"></span>
        </PopupWithForm>

        <ImagePopup />

    </div>
  );
}

export default App;
