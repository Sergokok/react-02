import React, {useState, useEffect, useContext} from "react";
import Card from "./Card";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState("");

  useEffect(() => {
    api.getInitialCards()
      .then((iniCards) => {
      setCards(iniCards);
    })
      .catch((err) => {
      console.log(err);
    });
  }, []);

 function handleCardLike(card) {
   const isLiked = card.likes.some((like) => like._id === currentUser._id);

   //отправляем запрос в api, получаем обновленные данные карточки, находим нужную карочку и обновляем
   api.changeLikeCardStatus(card._id, isLiked)
     .then((newCard) => {
     setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
   });
 }
  function handleCardDelete(card) {
    //Отправляем запрос в API, получаем обновлённые данные карточки, находим нужную карточку и обновляем
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => (c._id !== card._id)));
    });
  }

  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState([]);

  // useEffect(() => {
  //     Promise.all([api.getUserInfo(), api.getInitialCards()])
  //       .then(([info, initCards]) => {
  //         setUserName(info.name);
  //         setUserDescription(info.about);
  //         setUserAvatar(info.avatar);
  //         setCards(initCards);
  //       }).catch((err) => {
  //       console.log(err);
  //     });
  //   }, []
  // );

  return(
    <main className="content">
      {/* <!-- Профиль пользователя --> */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}/>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <h2 className="profile__about">{currentUser.about}</h2>
        </div>
        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards && cards.map((newCard) => (
            <Card
              card={newCard}
              key={newCard._id}
              name={newCard.name}
              link={newCard.link}
              onCardClick={props.onCardClick}
              likes={newCard.likes.length}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
        )}
      </section>
    </main>
  );
}