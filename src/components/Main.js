import React from 'react';
// import avatar from '../images/avatar.png';
import api from '../Utils/Api';
import Card from '../components/Card';

export default function Main(props) {
  const [cards, setCards] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([info, initCards]) => {
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
      setCards(initCards);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">
      {/*// <!-- Профиль пользователя -->*/}
      <div className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
            <button className="profile__avatar-button"></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <h2 className="profile__about">{userDescription}</h2>
        </div>
        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </div>
      {/*// <!-- Карточки мест -->*/}
      <div className="elements">
        {cards &&
          cards.map((newCard) => {
            return (
              <Card
                card={newCard}
                key={newCard._id}
                name={newCard.name}
                link={newCard.link}
                likes={newCard.likes.length}
                onCardClick={props.onCardClick}
              />
            );
          })}
      </div>
    </main>
  );
}

