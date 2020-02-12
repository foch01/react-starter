import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
//import { authenticationService } from '../services/authentication.service';

function Login(props) {
	const handleSubmit = e => {
		// e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	const { getFieldDecorator } = props.form;

	return (
		<Form
			style={{ margin: 'auto' }}
			onSubmit={handleSubmit()}
			className='login-form'
		>
			<Form.Item>
				{getFieldDecorator('username', {
					rules: [{ required: true, message: 'Please input your username!' }],
				})(
					<Input
						prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder='Username'
					/>
				)}
			</Form.Item>
			<Form.Item>
				{getFieldDecorator('password', {
					rules: [{ required: true, message: 'Please input your Password!' }],
				})(
					<Input
						prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
						type='password'
						placeholder='Password'
					/>
				)}
			</Form.Item>
			<Form.Item>
				{getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: true,
				})(<Checkbox>Remember me</Checkbox>)}
				<a className='login-form-forgot' href=''>
					Forgot password
				</a>
				<Button type='primary' htmlType='submit' className='login-form-button'>
					Log in
				</Button>
				Or <a href='/register'>register now!</a>
			</Form.Item>
		</Form>
	);
}
export default Form.create()(Login);
