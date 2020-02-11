import { authenticationService } from '../services/authentication.service';

export function authHeader() {
	const user = authenticationService.currentUser;
	if (user && user.token) {
		return { Authorization: `Bearer ${user.token}` };
	} else {
		return {};
	}
}
