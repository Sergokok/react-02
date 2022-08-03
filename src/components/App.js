import '../index.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
// import Card from './Card';

export default function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

	const [selectedCard, setSelectedCard] = React.useState(false);
	function handleCardClick(card) {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	}

	// // попап подтверждения удаления карточки
	const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
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
		setIsConfirmDeletePopupOpen(false);
	}

	return (
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
				{/*<div className="popup__input-container">*/}
				{/*        <label className="popup__input-label"*/}
				{/*         htmlFor="popup__input-name">Имя</label>*/}
				{/*  <input className="popup__input popup__input-name"*/}
				{/*         id="popup__input-name" type="text" name="name"*/}
				{/*         placeholder="Введите имя" />*/}
				{/*</div>*/}
				{/*<div className="popup__input-container">*/}
				{/*  <label className="popup__input-label" htmlFor="popup__input-job">Профессия</label>*/}
				{/*  <input className="popup__input popup__input-job" id="popup__input-job" type="text" name="job" placeholder="Введите профессию"/>*/}
				{/*</div>*/}
				{/*<section className="popup popup_profile popup_type_profile">*/}
				{/*  <form className="popup__form" name="form-profile">*/}
				{/*<h3 className="popup__title">Редактировать профиль</h3>*/}
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

				{/*<button className="popup__submit-button" type="submit">Сохранить</button>*/}
				{/*<button type="button" className="popup__close-button popup__close"></button>*/}
				{/*</form>*/}
				{/*</section>*/}
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
				{/* <section className="popup popup_card popup_type_card">
					<form className="popup__form" name="form-card">
						<h3 className="popup__title">Новое место</h3> */}
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
				{/* <button className="popup__submit-button" type="submit">
							Создать
						</button>
						<button type="button" className="popup__close-button popup__close"></button> */}
				{/* </form>
				</section> */}
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
				{/* <section className="popup popup_avatar popup_type_avatar"> */}
				{/* <form className="popup__form" name="form-avatar"> */}
				{/* <h3 className="popup__title">Загрузить аватар</h3> */}
				<input
					className="popup__input popup__input_avatar"
					id="avatar-input"
					placeholder="Ссылка на аватар"
					type="url"
					name="avatar"
					required
				/>
				<span className="popup__input-error avatar-input-error"></span>
				{/* <button className="popup__submit-button" type="submit">
							Сохранить
						</button>
						<button type="button" className="popup__close-button popup__close"></button> */}
				{/* </form> */}
				{/* </section> */}
			</PopupWithForm>

			{/*// <!-- Попап удаления карточки -->*/}
			<PopupWithForm
				isOpen={isConfirmDeletePopupOpen}
				// onClose={() => setIsConfirmDeletePopupOpen(false)}
				onClose={closeAllPopups}
				title={'Удалить карточку'}
				name={'form-delete'}
				onSubmit={'Да'}
			>
				{/* <section className="popup popup_delete popup_type_delete"> */}
				{/* <form className="popup__form" name="form-delete"> */}
				{/* <h3 className="popup__title popup__title_delete">Вы уверены?</h3> */}
				{/* <button className="popup__submit-button popup__submit-button_delete" type="submit">
						Да
					</button> */}
				{/* <button type="button" className="popup__close-button popup__close"></button> */}
				{/* </form> */}
				{/* </section> */}
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
				{/* <section className="popup popup_fullscreen popup_type_fullscreen">
					<div className="popup__image-container">
						<figure className="popup__figure">
							<button type="button" className="popup__close-button popup__close"></button>
							<img className="popup__image" />
							<figcaption className="popup__caption"></figcaption>
						</figure>
					</div>
				</section> */}
			</ImagePopup>
		</div>
	);
}
