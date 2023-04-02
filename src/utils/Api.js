class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    getInitialData() {
      return Promise.all([this.getCards(), this.getUserInfo()]);
    }

    getCards() {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    setUserInfo(name, status) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: status,
        }),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    createCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    toggleLike(id, like) {
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
        method: like ? 'DELETE' : 'PUT',
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  
    setUserAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar,
        }),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      });
    }
  }
  
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
      authorization: '246e7422-483c-4e41-82f4-4aaaa5291029',
      'Content-Type': 'application/json',
    },
  });
  
  export default api;