import React from 'react';
import PopupWithForm from "./PopupWithForm";

export default function DeleteCardPopup(props) {

    // добавить всплывающие подтверждения для удаления карточек. Попробуйте сделать это самостоятельно, если чувствуете в себе силы.
    function handleSubmit(e) {
        e.preventDefault();
        props.onDeleteCard(props.card);
    }

    return (

        <PopupWithForm
            name="popup popup_delete"
            // name="delete"
            title="Вы уверены?"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <form
                className="popup__form"
                name="form-delete">
                <h3 className="popup__title popup__title_delete">Вы уверены?
                </h3>
                onSubmit={handleSubmit}>
                <button
                    className="popup__submit-button popup__submit-button_delete"
                    type="submit">
                        Да
                </button>
                <button
                    type="button"
                    className="popup__close-button popup__close">
                </button>
            </form>
        </PopupWithForm>

    );
}