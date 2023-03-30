import React from 'react';

const ImagePopup = (props) => {
    return (
        <div className="popup popup_type_picture">
          <div className="popup__pic-block">
            <button className="popup__close-but" type="button" aria-label="Закрыть"></button>
            <img className="popup__img" src="#" alt="#" />
            <p className="popup__description"></p>
          </div>
        </div>
    );
};

export default ImagePopup;