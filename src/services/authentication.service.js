import { handleResponse } from '../helpers/handle-response';

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	};

	return fetch(`http://localhost:3001/users/authenticate`, requestOptions)
		.then(handleResponse)
		.then(user => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('currentUser', JSON.stringify(user));

			return user;
		});
}

function logout() {
	localStorage.removeItem('currentUser');
}

function getCurrentUser() {
	return JSON.parse(localStorage.getItem('currentUser'));
}

export const authenticationService = {
	login,
	logout,
	currentUser: getCurrentUser(),
};
