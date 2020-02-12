import { authenticationService } from '../services/authentication.service';

export function handleResponse(response) {
	return response.text().then(text => {
		const data = text;
		if (!response.ok) {
			if ([401, 403].indexOf(response.status) !== -1) {
				authenticationService.logout();
				window.location.reload();
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}
