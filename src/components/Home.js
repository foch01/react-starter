import React from 'react';

import { authenticationService } from '../services/authentication.service';

class Home extends React.Component {
	constructor(props) {
		super(props);

		// redirect to home if already logged in
		if (authenticationService.currentUser) {
			props.history.push('/');
		}
	}

	render() {
		return <h1>Home works</h1>;
	}
}

export { Home };
