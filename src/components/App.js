import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from "./Footer";
import api from "../utils/Api";

function App() {
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isTrashPopupOpen, setIsTrashPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
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
    setIsTrashPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.toggleLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => c._id === card._id ? newCard : c)
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .then(() => closeAllPopups())
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />

        <Footer />

        <PopupWithForm 
          title={'Редактировать профиль'} 
          popup={'profile'} 
          submitButtonText={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          setIsOpen={setIsEditProfilePopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_name" id="name" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="form__input-error" id="name-error"></span>
          <input className="form__input form__input_type_about" id="about" name="about" type="text" placeholder="Ваша профессия" required minLength="2" maxLength="200" />
          <span className="form__input-error" id="about-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          title={'Новове место'} 
          popup={'place'} 
          submitButtonText={'Создать'}
          isOpen={isAddPlacePopupOpen}
          setIsOpen={setIsAddPlacePopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_placename" id="title" name="name" type="text" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="form__input-error" id="title-error"></span>
          <input className="form__input form__input_type_link" id="link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="link-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          title={'Обновить аватар?'} 
          popup={'edit-avatar'} 
          submitButtonText={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          setIsOpen={setIsEditAvatarPopupOpen}
          onClose={closeAllPopups}
        > 
          <input className="form__input form__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
          <span className="form__input-error" id="avatar-error"></span>
        </PopupWithForm>

        <ImagePopup 
          popup={'picture'}
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm 
          title={'Вы уверены?'} 
          popup={'delete-card'} 
          submitButtonText={'Да'}
          isOpen={isTrashPopupOpen}
          setIsOpen={setIsTrashPopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
