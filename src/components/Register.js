import React, { useState } from 'react';
import { Button, DatePicker, Form, Icon, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import * as moment from 'moment';
import { authenticationService } from '../services/authentication.service';

export default function Register() {
	const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
	const history = useHistory();
	const [user, setUser] = useState({
		email: '',
		password: '',
		name: '',
		firstName: '',
		dateOfBirth: moment.now,
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(`${user.name}< ===== >${user.password}`);
		authenticationService.register(user).then(r => {
			if (r) {
				history.push('/login');
			}
		});
	};

	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<Form
			style={{ margin: 'auto' }}
			onSubmit={handleSubmit}
			className='login-form'
		>
			<Form.Item>
				<Input
					label='email'
					name='email'
					prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder='email'
					type='text'
					value={user.email}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					label='password'
					name='password'
					prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder='password'
					type='password'
					value={user.password}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					label='name'
					name='name'
					prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder='name'
					type='text'
					value={user.name}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<Input
					label='first name'
					name='firstName'
					prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
					placeholder='first name'
					type='text'
					value={user.firstName}
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<DatePicker
					label='birth-date'
					name='dateOfBirth'
					format={dateFormatList}
				/>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit' className='login-form-button'>
					Sign in
				</Button>
			</Form.Item>
		</Form>
	);
}
