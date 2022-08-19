import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);

    // Внутри EditProfilePopup добавьте стейт-переменные name и description и привяжите их к полям ввода, сделав их управляемыми.

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [about, setAbout] = React.useState('');

    // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    // Теперь в компоненте EditAvatarPopup можно добавить обработчик handleSubmit. Однако, мы не можем делать запрос в API прямо в этом обработчике, потому что после его завершения нужно обновить переменную состояния currentUser, которая находится ещё выше — в компоненте App. Поэтому эта функция будет содержать следующий код:
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }
    // Обработчик изменения полей ввода
    function handleChange(e) {
        if(e.target.name === 'name') {
            setName(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            title="Редактировать профиль"
            name="form-profile"
            // onSubmit="Сохранить"
            // buttonText="Сохранить"

        >
            <input
                name="name"
                id="name-input"
                className="popup__input popup__input_name"
                placeholder="Имя"
                type="text"
                required
                maxLength="40"
                minLength="2"
                value={name}
                onChange={handleChange}
            />
            <span className="popup__input-error name-input-error"></span>
            <input
                id="about-input"
                className="popup__input popup__input_about"
                placeholder="Профессия"
                type="text"
                required
                maxLength="200"
                minLength="2"
                value={description}
                onChange={handleChange}
            />
            <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>

    );
};