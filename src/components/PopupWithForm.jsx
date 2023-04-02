import React from 'react';

const PopupWithForm = ({popup, title, children, submitButtonText, onClose, isOpen, setIsOpen}) => {
  const popupIsOpen = isOpen ? 'popup_opened' : '';

    return (
        <div className={`popup popup_type_${popup} ${popupIsOpen}`} onClick={() => setIsOpen(false)}>
            <div className="popup__conteiner" onClick={(evt) => evt.stopPropagation()}>
              <button 
                onClick={onClose}
                className="popup__close-but" 
                type="button" 
                aria-label="Закрыть" 
              />
              <h2 className="popup__title">{title}</h2>
              <form className="form" name={popup}>
                {children}
                <button className="form__button" type="submit">
                  {submitButtonText}
                </button>
              </form>
            </div>
        </div>
    );
};

export default PopupWithForm;