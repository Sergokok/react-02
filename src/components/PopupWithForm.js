import React, { useEffect } from "react";

export default function PopupWithForm({ title, isOpen, onClose, children, name, onSubmit }) {
	const className = `popup popup_type_${name} ${isOpen ? "popup_active" : ""}`;
	useEffect(() => {
		const handleEscClose = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		if (isOpen) {
			document.addEventListener("keydown", handleEscClose);
		} else {
			document.removeEventListener("keydown", handleEscClose);
		}
	}, [isOpen, onClose]);

	// Добавьте новому компоненту пропсы isOpen и onClose и пробрасывайте их в PopupWithForm.

	return (
		<div className={className} onClick={onClose}>
			<form onSubmit={onSubmit}
				className="popup__form"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<button
					className="popup__close-button"
					type="button"
					onClick={onClose}>
				</button>
				<h3 className="popup__title">{title}</h3>
				{children}
				<button
					className="popup__submit-button"
					type="submit">
					{/*{onSubmit}*/}
				</button>
			</form>
		</div>
	);
}

