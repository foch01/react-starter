import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';

import './App.css';

const { Header, Footer } = Layout;

function App() {
	const [toggle, setToggle] = useState({ collapsed: false });

	const toggleCollapsed = () => {
		setToggle({ collapsed: !toggle.collapsed });
	};

	return (
		<Router>
			<div className='App'>
				<Layout style={{ height: 1000 }}>
					<Header className='header'>
						<div className='logo' />
						<Menu
							theme='dark'
							mode='horizontal'
							defaultSelectedKeys={['2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item
								style={{ fontWeight: 'bold', fontSize: 24, font: '#1890FF' }}
							>
								<Icon type='play-square' style={{ fontSize: 24 }} />
								Movie House
							</Menu.Item>
							<Menu.Item
								style={{ float: 'right', backgroundColor: '#1890FF' }}
								onClick={toggleCollapsed}
							>
								<Icon type={toggle.collapsed ? 'menu-unfold' : 'menu-fold'} />
							</Menu.Item>
						</Menu>
					</Header>
					<div style={{ width: 256 }}>
						<Menu
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode='inline'
							theme='dark'
							inlineCollapsed={toggle.collapsed}
						>
							<Menu.Item>
								<Link to='/cart'>
									<Icon type='login' />
									<span>Log in&nbsp;&nbsp;&nbsp;&nbsp;</span>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to='/register'>
									<Icon type='plus' />
									<span>register &nbsp;&nbsp;&nbsp;</span>
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to='/home'>
									<Icon type='play-circle' />
									<span>My movies</span>
								</Link>
							</Menu.Item>
						</Menu>
					</div>
					<Switch>
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route path='/home' component={Home} />
					</Switch>
					<Footer style={{ textAlign: 'center' }}> Movie House </Footer>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
