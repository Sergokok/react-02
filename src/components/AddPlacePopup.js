import React, { useState } from 'react';
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
    const [cardName, setCardName] = useState('');
    const [cardLink, setCardLink] = useState('');

    function handleCardChange(e) {
        if (e.target.id === 'title-input') {
            setCardName(e.target.value);
        } else {
            setCardLink(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: cardName,
            link: cardLink
        });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            title="Новое место"
            name="form-card"
            // onSubmit="Создать"
            onSubmit={handleSubmit}
        >
            <input
                id="title-input"
                className="popup__input popup__input_title"
                placeholder="Название"
                type="text"
                name="name"
                required
                maxLength="30"
                minLength="2"
                onChange={handleCardChange}
            />
            <span className="popup__input-error title-input-error"></span>
            <input
                id="link-input"
                className="popup__input popup__input_link"
                placeholder="Ссылка на картинку"
                type="url"
                name="link"
                required
                onChange={handleCardChange}
            />
            <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    );
};