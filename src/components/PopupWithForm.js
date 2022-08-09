import React from 'react';

export default function PopupWithForm({ isOpen, onClose, title, name, children, onSubmit }) {
	const className = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;

	React.useEffect(() => {
		const handleEscClose = (evt) => {
			if (evt.key === 'Escape') {
				onClose();
			}
		};
		if (isOpen) {
			document.addEventListener('keydown', handleEscClose);
		} else {
			document.removeEventListener('keydown', handleEscClose);
		}
	}, [isOpen]);

	return (
		// <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
		// <div className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
		<div className={className} onClick={onClose}>
			<form
				className="popup__form"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
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
