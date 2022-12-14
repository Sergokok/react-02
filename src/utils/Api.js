class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	// Проверка ответа сервера
	_getResponseData(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}

	// Получаение данных пользователя
	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		}).then((res) => this._getResponseData(res));
	}

	// Отправка данных пользователя
	setUserInfo({ name, about }) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				about: about,
			}),
		}).then((res) => this._getResponseData(res));
	}

	// ДРУГОЕ изменение данных пользователя
	// changeUserInfo(data) {
	// 	return fetch(`${this._baseUrl}/users/me`, {
	// 		method: "PATCH",
	// 		headers: this._headers,
	// 		body: JSON.stringify({
	// 			name: data["name"],
	// 			about: data["about"],
	// 		}),
	// 	}).then(this._getResponseData);
	// }

	// Получение карточки
	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
		}).then((res) => this._getResponseData(res));
	}

	// Добавление карточки старое
	addCard(item) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(item),
		}).then((res) => this._getResponseData(res));
	}

	// Добавление карточки новое
	// addNewCard({ name, link }) {
	// 	return fetch(`${this._baseUrl}/cards`, {
	// 		method: 'POST',
	// 		headers: this._headers,
	// 		body: JSON.stringify({
	// 			name: name,
	// 			link: link,
	// 		}),
	// 	}).then((res) => this._getResponseData(res));
	// }

	// Удаление карточки
	deleteCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then((res) => this._getResponseData(res));
	}

	// Лайки старые
	likeCard(cardId, method) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes/`, {
			method: method,
			headers: this._headers,
		}).then((res) => this._getResponseData(res));
	}

	// Изменение аватара
	editAvatar(avatar) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(avatar),
		}).then((res) => this._getResponseData(res));
	}


	changeLikeCardStatus(cardId, isLiked) {
		if (isLiked) {
			return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
				method: "DELETE",
				headers: this._headers,
			}).then(this._getResponseData);
		} else {
			return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
				method: "PUT",
				headers: this._headers,
			}).then(this._getResponseData);
		}
	}
}

// Авторизация
const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
	headers: {
		authorization: '62ebdfd5-7936-4ed6-b3c0-2901452931d5',
		'Content-Type': 'application/json',
	},
});
export default api;
