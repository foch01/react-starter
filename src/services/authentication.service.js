import { handleResponse } from '../helpers/handle-response';

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: username, password }),
	};

	return fetch(`http://localhost:3001/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			localStorage.setItem('currentUser', user);
			return user;
		});
}

function logout() {
	localStorage.removeItem('currentUser');
}

function getCurrentUser() {
	return localStorage.getItem('currentUser');
}

function register(user) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	};

	return fetch(`http://localhost:3001/users`, requestOptions)
		.then(handleResponse)
		.then(user => {
			console.log(JSON.stringify(user));
			return user;
		});
}

export const authenticationService = {
	login,
	logout,
	register,
	currentUser: getCurrentUser(),
};
