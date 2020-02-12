import { authenticationService } from '../services/authentication.service';

export function authHeader() {
	const user = authenticationService.currentUser;
	if (user) {
		const token = user.slice(1, -1);
		return {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};
	} else {
		return {};
	}
}
