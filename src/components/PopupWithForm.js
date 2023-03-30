import React from 'react';

const PopupWithForm = (props) => {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__conteiner">
              <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
              <h2 className="popup__title">{props.title}</h2>
              <form className="form" name ={props.name}>
                <button className="form__button" type="submit"></button>
              </form>
            </div>
        </div>
    );
};

export default PopupWithForm;