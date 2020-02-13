import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Icon, Menu} from 'antd';
import './App.css';
import Login from './components/Login';
import SearchMovies from './components/SearchMovies';
import Register from './components/Register';
import Playlist from './components/Playlist';
import BestMovies from './components/BestMovies';
import {PrivateRoute} from "./components/PrivateRoute";
import {authenticationService} from "./services/authentication.service";

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
						<Menu.Item key='0'>
							<Link to='/login'>
								<Icon type='login' />
								<span>Log in&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</Link>
						</Menu.Item>
						<Menu.Item key='1' onClick={authenticationService.logout}>
							<Link to='/login'>
								<Icon type='logout' />
								<span>Log out&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</Link>
						</Menu.Item>
						<Menu.Item key='2'>
							<Link to='/'>
								<Icon type='play-circle' />
								<span>Home</span>
							</Link>
						</Menu.Item>
						<Menu.Item key='3'>
							<Link to='/search'>
								<Icon type='play-square' />
								<span>Rechercher un film</span>
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
					<div style={{ padding: 24, minHeight: 380 }}>
						<Switch>
							<Route path='/login' component={Login} />
							<Route path='/register' component={Register} />
							<PrivateRoute path='/playlist' component={Playlist} />
							<PrivateRoute path='/search' component={SearchMovies} />
							<Route path='/' component={BestMovies} />
						</Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					movie house
				</Footer>
			</Layout>
		</Router>
	);
}

export default App;
