import React from 'react';

export default function ImagePopup({ card, onClose }) {
	const cardFullscreen = !!card;
	const className = `popup popup_type_${cardFullscreen ? 'card' : 'profile'} ${
		cardFullscreen ? 'popup_opened' : ''
	}`;

	return (
		// <div
		// 	className={`popup popup_fullscreen popup_type_fullscreen ${
		// 		cardFullscreen && `popup_opened`
		// 	}`}
		// >
		<div className={className} onClick={onClose}>
			<div
				className="popup__image-container"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
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

