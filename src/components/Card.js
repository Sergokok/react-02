import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {

	const currentUser = useContext(CurrentUserContext);
// владелец ли карточки
	const isOwn = props.card.owner._id === currentUser._id;

	// делаем класс для кнопки удаления
	// const cardDeleteButtonClassName =`elements__trash-button_hide ${isOwn && "elements__trash-button"}`;

	const cardDeleteButtonClassName = isOwn ? "elements__trash-button" : "elements__trash-button_hide";

	// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
	const isLiked = props.card.likes.some(i => i._id === currentUser._id);

	// Создаём переменную, которую после зададим в `className` для кнопки лайка
	const cardLikeButtonClassName = `elements__like-button ${isLiked && "elements__like-button_active"}`;


	function handleClick() {
		props.onCardClick(props.card);
	}

	/* Теперь нужно добавить пропс `onCardLike` для компонента `Card` и задать в него эту функцию. Также добавьте в `Card` обработчик клика `handleLikeClick` и вызовите из него `onCardLike` с аргументом `card` — по аналогии с уже имеющимся обработчиком `handleClick`.
	Если всё сделано правильно, вы увидите магию декларативного подхода: после отправки данных на сервер не нужно обновлять DOM. Нужно только внести изменения в стейт, и интерфейс обновится автоматически.*/

	function handleLikeClick() {
		props.onCardLike(props.card);
	}

	function handleDeleteClick() {
		props.onCardDelete(props.card);
	}

	return (
		<div
			className="elements__card">
			<img
				className="elements__image"
				src={props.link}
				alt={props.name}
				onClick={handleClick} />
			<button
				// className="elements__trash-button"
				className={cardDeleteButtonClassName}
				type="button"
				onClick={handleDeleteClick}/>
			<h2
				className="elements__title">{props.name}
			</h2>
			<div
				className="elements__like-container">
				<button
					// className="elements__like-button"
					className={cardLikeButtonClassName}
					type="button"
					id="like"
					onClick={handleLikeClick}
				/>
				<span
					className="elements__like-counter">{props.likes}
				</span>
			</div>
		</div>
	);
}