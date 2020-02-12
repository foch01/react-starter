import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {authenticationService} from "../services/authentication.service";

export default function Login () {
	const history = useHistory();
	const [credentials, setCredentials] = useState({
		name: "",
		password: ""
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(`${credentials.name}< ===== >${credentials.password}`);
		authenticationService.login(credentials.name,credentials.password).then( r => {
			if (r){
				history.push('/home');
			}
		});
	};

	function register(){
		history.push('/register');
	}

	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<Form style={{margin:"auto"}} onSubmit={handleSubmit}  className="login-form">
			<Form.Item>
				<Input
						label="Username"
						name="name"
						prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
						placeholder="Username"
						type="text"
						value={credentials.name}
						onChange={handleChange}
					/>
			</Form.Item>
			<Form.Item>
					<Input
						label="Password"
						placeholder="password"
						name="password"
						prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
						type="password"
						value={credentials.password}
						onChange={handleChange}
					/>
			</Form.Item>
			<Form.Item>
				<Checkbox>Remember me</Checkbox>
				<Button type="primary" htmlType="submit"  className="login-form-button">
					Log in
				</Button>
				Or <a onClick={register}>register now!</a>
			</Form.Item>
		</Form>
	);
}