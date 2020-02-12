import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Icon, Menu, Breadcrumb } from 'antd';
import Login from './components/Login';
import SearchMovies from './components/SearchMovies';
import Register from './components/Register';
import './App.css';
import Playlist from './components/Playlist';
import { Home } from './components/Home';

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<Router>
			<Layout>
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className='logo' />
					<Menu
						theme='dark'
						mode='horizontal'
						defaultSelectedKeys={['2']}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key='1'>
							<Link to='/login'>
								<Icon type='login' />
								<span>Log in&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to='/home'>
								<Icon type='play-circle' />
								<span>My movies</span>
							</Link>
						</Menu.Item>
						<Menu.Item key='4'>
							<Link to='/playlist'>
								<Icon type='play-square' />
								<span>Ma playlist</span>
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ minHeight: 1000, padding: '0 50px', marginTop: 64 }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ padding: 24, minHeight: 380 }}>
						<Switch>
							<Route path='/login' component={Login} />
							<Route path='/register' component={Register} />
							<Route path='/home' component={Home} />
							<Route path='/playlist' component={Playlist} />
						</Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Router>
	);
}

export default App;
