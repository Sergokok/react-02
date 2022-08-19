import '../index.css'
import React, {useEffect, useState} from "react";
import api from "../utils/Api";
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

export default function App() {
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		api
			.getUserInfo()
			.then((currentInfo) => {
				setCurrentUser(currentInfo);
				console.log(currentInfo);
			})
			.catch((err) => {
				console.log(err);
			});
	},	[]);



	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);


	function handleEditAvatarPopupClick() {
		setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	}

	function handleEditProfilePopupClick() {
		setEditProfilePopupOpen(true);
	}

	function handleAddPlacePopupClick() {
		setAddPlacePopupOpen(true);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	}

	function closeAllPopups() {
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setIsImagePopupOpen(false);
		setSelectedCard(null)
	}

	// Теперь нужно создать обработчик в App. Назовите его handleUpdateUser и задайте его в виде нового пропса onUpdateUser для компонента EditAvatarPopup. Внутри этого обработчика вызовите api.setUserInfo. После завершения запроса обновите стейт currentUser из полученных данных и закройте все модельные окна.
	function handleUpdateUser(data) {
		api.
		// setUserInfo(data)
			changeUserInfo(data)
			.then(res => {
				setCurrentUser(res);
				closeAllPopups();
			}).catch(err => {
				console.log(err);
			}
		);
	}

	function handleUpdateAvatar(data) {
		api
			.editAvatar(data)
			.then(res => {
				setCurrentUser(res);
				closeAllPopups();
			}).catch(err => {
				console.log(err);
			}
		);
	}


	return(
		<CurrentUserContext.Provider value={currentUser}>
		<div className='page'>
			<Header />
			<Main
				onEditProfile={handleEditProfilePopupClick}
				onEditAvatar={handleEditAvatarPopupClick}
				onAddPlace={handleAddPlacePopupClick}
				onCardClick={handleCardClick}
				// onUpdateAvatar={handleUpdaterAvatar}
			/>
			<Footer />

			{/* <!-- Попап редактирования профиля --> */}
			<EditProfilePopup
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
				onUpdateUser={handleUpdateUser}/>
			/>

			{/*<PopupWithForm*/}
			{/*	isOpen={isEditProfilePopupOpen}*/}
			{/*	onClose={closeAllPopups}*/}
			{/*	title="Редактировать профиль"*/}
			{/*	name="form-profile"*/}
			{/*	onSubmit="Сохранить">*/}
			{/*	<input*/}
			{/*		id="name-input"*/}
			{/*		className="popup__input popup__input_name"*/}
			{/*		placeholder="Имя"*/}
			{/*		type="text"*/}
			{/*		required*/}
			{/*		maxLength="40"*/}
			{/*		minLength="2"/>*/}
			{/*	<span className="popup__input-error name-input-error"></span>*/}
			{/*	<input*/}
			{/*		id="about-input"*/}
			{/*		className="popup__input popup__input_about"*/}
			{/*		placeholder="Профессия"*/}
			{/*		type="text"*/}
			{/*		required*/}
			{/*		maxLength="200"*/}
			{/*		minLength="2"*/}
			{/*	/>*/}
			{/*	<span className="popup__input-error about-input-error"></span>*/}
			{/*</PopupWithForm>*/}
			{/* <!-- Попап добавления новых карточек --> */}
			<PopupWithForm
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
				title="Новое место"
				name="form-card"
				onSubmit="Создать">
				<input
					id="title-input"
					className="popup__input popup__input_title"
					placeholder="Название"
					type="text"
					name="name"
					required
					maxLength="30"
					minLength="2"/>
				<span className="popup__input-error title-input-error"></span>
				<input
					id="link-input"
					className="popup__input popup__input_link"
					placeholder="Ссылка на картинку"
					type="url"
					name="link"
					required/>
				<span className="popup__input-error link-input-error"></span>
			</PopupWithForm>
			{/* <!-- Попап редактирования аватара --> */}
			<EditAvatarPopup
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
				onUpdateAvatar={handleUpdateAvatar}/>
			/>
			{/*<PopupWithForm*/}
			{/*	isOpen={isEditAvatarPopupOpen}*/}
			{/*	onClose={closeAllPopups}*/}
			{/*	title="Редактировать аватар"*/}
			{/*	name="form-avatar"*/}
			{/*	onSubmit="Сохранить"*/}
			{/*>*/}
			{/*	<input*/}
			{/*		className="popup__input popup__input_avatar"*/}
			{/*		id="avatar-input"*/}
			{/*		placeholder="Ссылка на картинку"*/}
			{/*		type="url"*/}
			{/*		name="avatar"*/}
			{/*		required*/}
			{/*	/>*/}
			{/*	<span className="popup__input-error avatar-input-error"></span>*/}
			{/*</PopupWithForm>*/}
			{/* <!-- Попап открытия фото --> */}
			<ImagePopup
				name="popup_fullscreen"
				card={selectedCard}
				isOpen={isImagePopupOpen}
				onClose={closeAllPopups}>
			</ImagePopup>
		</div>
		</CurrentUserContext.Provider>
	)

};

