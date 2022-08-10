import '../index.css';
import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../Utils/Api";

// import Card from './Card';



// Создайте файл `src/contexts/CurrentUserContext.js` и экспортируйте из него новый объект контекста.
//
// Импортируйте этот объект в `App` и используйте его провайдер: «оберните» в него всё текущее содержимое корневого компонента. В качестве значения контекста для провайдера используйте `currentUser`.


export default function App() {

	// /* // другой вариант закрытия по эскейпу
	// const handleEscClose = (evt) => {
	// 	if (evt.key === 'Escape') {
	// 		closeAllPopups();
	// 	}
	// };
	// */
	const [currentUser, setCurrentUser] = React.useState(null);
	// const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		api.getUserInfo()
			.then((user) => {
				setCurrentUser(user);
			}).catch((err) => {
				console.log(err);
			}
		);
	} , []);



	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
		// document.addEventListener('keydown', handleEscClose);
	}

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
		// document.addEventListener('keydown', handleEscClose);
	}

	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
		// document.addEventListener('keydown', handleEscClose);
	}

	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

	const [selectedCard, setSelectedCard] = React.useState(null);
	function handleCardClick(card) {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
		// document.addEventListener('keydown', handleEscClose);
	}

	// // попап подтверждения удаления карточки
	// const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
	// function handleDeleteCardClick(card) {
	// 	setSelectedCard(card);
	// 	setIsConfirmDeletePopupOpen(true);
	// }

	// закрывает все окна
	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsImagePopupOpen(false);
		setSelectedCard(null);
		// setIsConfirmDeletePopupOpen(false);
		// document.removeEventListener('keydown', handleEscClose);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
		<div className="page">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onEditAvatar={handleEditAvatarClick}
				onAddPlace={handleAddPlaceClick}
				onCardClick={handleCardClick}
			/>
			<Footer />

			{/*// <!-- Попап редактирования профиля -->//*/}
			<PopupWithForm
				isOpen={isEditProfilePopupOpen}
				// onClose={() => setIsEditProfilePopupOpen(false)}
				onClose={closeAllPopups}
				title="Редактировать профиль"
				name="form-profile"
				onSubmit={'Сохранить'}
			>

				<input
					id="name-input"
					className="popup__input popup__input_name"
					placeholder="Имя"
					type="text"
					// name="name"
					// value="Жак-Ив Кусто"
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
					// name="about"
					// value="Исследователь океана"
					required
					maxLength="200"
					minLength="2"
				/>
				<span className="popup__input-error about-input-error"></span>

			</PopupWithForm>
			{/*// <!-- Попап добавления новых карточек -->*/}
			<PopupWithForm
				isOpen={isAddPlacePopupOpen}
				// onClose={() => setIsAddPlacePopupOpen(false)}
				onClose={closeAllPopups}
				title={'Новое место'}
				name={'form-card'}
				onSubmit={'Добавить'}
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

			</PopupWithForm>

			{/*// <!-- Попап редактирования аватара -->*/}
			<PopupWithForm
				isOpen={isEditAvatarPopupOpen}
				// onClose={() => setIsEditAvatarPopupOpen(false)}
				onClose={closeAllPopups}
				title={'Редактировать аватар'}
				name={'form-avatar'}
				onSubmit={'Сохранить'}
			>

				<input
					className="popup__input popup__input_avatar"
					id="avatar-input"
					placeholder="Ссылка на аватар"
					type="url"
					name="avatar"
					required
				/>
				<span className="popup__input-error avatar-input-error"></span>

			</PopupWithForm>

			{/*// <!-- Попап удаления карточки -->*/}
			<PopupWithForm
				// isOpen={isConfirmDeletePopupOpen}
				// onClose={() => setIsConfirmDeletePopupOpen(false)}
				onClose={closeAllPopups}
				title={'Удалить карточку'}
				name={'form-delete'}
				onSubmit={'Да'}
			>

			</PopupWithForm>

			{/*// <!-- Попап открытия фото -->*/}
			<ImagePopup
				name="popup_fullscreen"
				card={selectedCard}
				isOpen={isImagePopupOpen}
				onClose={closeAllPopups}
				// onClose={() => setIsImagePopupOpen(false)}
				// title={'Фото'}
				// image={popup__caption}
			>

			</ImagePopup>
		</div>
		</CurrentUserContext.Provider>
	);

}
