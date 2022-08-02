import React from 'react';

export default function PopupWithForm({ isOpen, onClose, title, name, children, onSubmit }) {
	return (
		// <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
		<div className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
			<form className="popup__form">
				<button type="button" className="popup__close-button" onClick={onClose}></button>

				<h3 className="popup__title">{title}</h3>
				{children}

				<button className="popup__submit-button" type="submit">
					{onSubmit}
				</button>
				{/* <section action="#" name={name} onSubmit={onSubmit}> */}
				{/* </section> */}
			</form>
		</div>
	);
}
