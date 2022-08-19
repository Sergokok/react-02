import React, { useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props)  {
// Используйте реф. На этот раз вместо управляемых компонентов используйте реф, чтобы получить прямой доступ к DOM-элементу инпута и его значению
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }


    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            title="Редактировать аватар"
            name="form-avatar"
            // onSubmit="Сохранить"
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_avatar"
                id="avatar-input"
                placeholder="Ссылка на картинку"
                type="url"
                name="avatar"
                ref={inputRef}
                required
            />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    );
};