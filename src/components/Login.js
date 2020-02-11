import React from 'react';

import { authenticationService } from '../services/authentication.service';

class Login extends React.Component {
	constructor(props) {
		super(props);

		// redirect to home if already logged in
		if (authenticationService.currentUser) {
			props.history.push('/');
		}
	}

	render() {
		return <h1>works</h1>;
	}
}

export { Login };
