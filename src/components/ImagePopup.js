import React from 'react';


export default function PopupWithForm({ card, onClose }) {
	const cardFullscreen = !!card;

	return (
		<div
			className={`popup popup_fullscreen popup_type_fullscreen ${
				cardFullscreen && `popup_opened`
			}`}
		>
			<div className="popup__image-container">
				<figure className="popup__figure">
					<button
						type="button"
						className="popup__close-button popup__close"
						onClick={onClose}
					></button>
					<img
						className="popup__image"
						src={cardFullscreen ? card.link : ``}
						alt={cardFullscreen ? card.name : ``}
					/>
					<figcaption className="popup__caption"> {`${cardFullscreen && card.name}`}</figcaption>
				</figure>
			</div>
		</div>
	);
}

