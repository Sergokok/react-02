import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {

	const currentUser = useContext(CurrentUserContext);
// владелец ли карточки
	const isOwn = props.card.owner.id === currentUser._id;

	// делаем класс для кнопки удаления
	const cardDeleteButtonClassName =`elements__trash-button ${isOwn ? "elements__trash-button" : ""}`;

	// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
	const isLiked = props.card.likes.some(i => i._id === currentUser._id);

	// Создаём переменную, которую после зададим в `className` для кнопки лайка
	const cardLikeButtonClassName = `element__like-button ${isLiked && "element__like-button_active"}`;


	function handleClick() {
		props.onCardClick(props.card);
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
				type="button" />
			<h2
				className="elements__title">{props.name}
			</h2>
			<div
				className="elements__like-container">
				<button
					className="elements__like-button"
					type="button" id="like" />
				<span
					className="elements__like-counter">{props.likes}
				</span>
			</div>
		</div>
	);
}