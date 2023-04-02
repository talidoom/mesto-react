import React from "react";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from "./Footer";
import api from "../utils/Api";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isTrashPopupOpen, setisTrashPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api.getCards().then(card => {
      setCards(card);
    });
  }, [])

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setisTrashPopupOpen(false);
    setIsPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
        <Header />

        {cards.length > 0 ? 
        <Main 
          cards={cards}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        /> 
        : <div className="no-date">Данных нет...</div>}

        <Footer />

        <PopupWithForm 
          title={'Редактировать профиль'} 
          popup={'profile'} 
          submitButtonText={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          setIsOpen={setIsPopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_name" id="name" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
          <span className="form__input-error" id="name-error"></span>
          <input className="form__input form__input_type_about" id="about" name="about" type="text" placeholder="Ваша профессия" required minlength="2" maxlength="200" />
          <span className="form__input-error" id="about-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          title={'Новове место'} 
          popup={'place'} 
          submitButtonText={'Создать'}
          isOpen={isAddPlacePopupOpen}
          setIsOpen={setIsPopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_placename" id="title" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
          <span className="form__input-error" id="title-error"></span>
          <input className="form__input form__input_type_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="link-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          title={'Обновить аватар?'} 
          popup={'edit-avatar'} 
          submitButtonText={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          setIsOpen={setIsPopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="avatar-error"></span>
        </PopupWithForm>

        <ImagePopup 
          popup={'picture'}
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isPopupOpen}
          setIsOpen={setIsPopupOpen}
        />

        <PopupWithForm 
          title={'Вы уверены?'} 
          popup={'delete-card'} 
          submitButtonText={'Да'}
          isOpen={isTrashPopupOpen}
          // setIsOpen={setIsPopupOpen}
          onClose={closeAllPopups}
        />

    </div>
  );
}

export default App;
