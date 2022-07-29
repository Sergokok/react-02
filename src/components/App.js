import '../index.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// import Card from './Card';

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  // const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page">
    <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}/>
      <Footer />

  {/*// <!-- Попап редактирования профиля -->//*/}
  <section className="popup popup_profile">
    <form className="popup__form" name="form-profile">
      <h3 className="popup__title">Редактировать профиль</h3>
      <input
        id="name-input"
        className="popup__input popup__input_name"
        placeholder="Имя"
        type="text"
        name="name"
        value="Жак-Ив Кусто"
        required
        maxLength="40"
        minLength="2"
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        id="about-input"
        className="popup__input popup__input_about"
        placeholder="Профессия"
        type="text"
        name="about"
        value="Исследователь океана"
        required
        maxLength="200"
        minLength="2"
      />
      <span className="popup__input-error about-input-error"></span>
      <button className="popup__submit-button" type="submit">Сохранить</button>
      <button type="button" className="popup__close-button popup__close"></button>
    </form>
  </section>
  {/*// <!-- Попап добавления новых карточек -->*/}
  <section className="popup popup_card">
    <form className="popup__form" name="form-card">
      <h3 className="popup__title">Новое место</h3>
      <input
        id="title-input"
        className="popup__input popup__input_title"
        placeholder="Название"
        type="text"
        name="name"
        required
        maxLength="30"
        minLength="2"
      />
      <span className="popup__input-error title-input-error"></span>
      <input
        id="link-input"
        className="popup__input popup__input_link"
        placeholder="Ссылка на картинку"
        type="url"
        name="link"
        required
      />
      <span className="popup__input-error link-input-error"></span>
      <button className="popup__submit-button" type="submit">Создать</button>
      <button type="button" className="popup__close-button popup__close"></button>
    </form>
  </section>
  {/*// <!-- Попап редактирования аватара -->*/}
  <section className="popup popup_avatar">
    <form className="popup__form" name="form-avatar">
      <h3 className="popup__title">Загрузить аватар</h3>
      <input
        className="popup__input popup__input_avatar"
        id="avatar-input"
        placeholder="Ссылка на аватар"
        type="url"
        name="avatar"
        required
      />
      <span className="popup__input-error avatar-input-error"></span>
      <button className="popup__submit-button" type="submit">Сохранить</button>
      <button type="button" className="popup__close-button popup__close"></button>
    </form>
  </section>
  {/*// <!-- Попап удаления карточки -->*/}
  <section className="popup popup_delete">
    <form className="popup__form" name="form-delete">
      <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
      <button className="popup__submit-button popup__submit-button_delete" type="submit">Да</button>
      <button type="button" className="popup__close-button popup__close"></button>
    </form>
  </section>
  {/*// <!-- Попап открытия фото -->*/}
  <section className="popup popup_fullscreen">
    <div className="popup__image-container">
      <figure className="popup__figure">
        <button type="button" className="popup__close-button popup__close"></button>
        <img className="popup__image"/>
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  </section>
  {/*// <!-- Шаблон карточек с фото -->*/}
  {/*<template className="elements__template">*/}
  {/*  <li className="elements__card">*/}
  {/*    <button type="button" className="elements__trash-button"></button>*/}
  {/*    <img className="elements__image"/>*/}
  {/*    <h2 className="elements__title"></h2>*/}
  {/*    <div className="elements__like-container">*/}
  {/*      <button type="button" className="elements__like-button"></button>*/}
  {/*      <p className="elements__like-counter">0</p>*/}
  {/*    </div>*/}
  {/*  </li>*/}
  {/*</template>*/}

     </div> // конец контейнера
  );
}
