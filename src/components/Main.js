import React from 'react';
import avatar from '../images/avatar.png';


export default function Main() {

  return (
    <main className="content">
      {/*// <!-- Профиль пользователя -->*/}
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={avatar}
            alt="Аватар пользователя"
          />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-button"></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Имя пользователя</h1>
          <h2 className="profile__about">О пользователе</h2>
        </div>
        <button type="button" className="profile__edit-button"></button>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        <ul className="elements__container"></ul>
      </section>
    </main>
  )
}
