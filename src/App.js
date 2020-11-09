import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PostList from './components/blog/PostList';
import PostContextProvider from './contexts/PostContext';
import './dist/css/style.min.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<PostContextProvider>
				<Switch>
					<Route path='/' exact>
						<PostList />
					</Route>
					<Route path='/about' exact>
						<h1>About</h1>
					</Route>
					<Route path='/contact' exact>
						<h1>Contact</h1>
					</Route>
					<Route path='/login' exact>
						<h1>Login</h1>
					</Route>
					<Route path='/register' exact>
						<h1>Register</h1>
					</Route>
					<Route path='/:slug' exact>
						<h1>Single Post</h1>
					</Route>
					<Route path='/author/:username' exact>
						<h1>Author's Posts</h1>
					</Route>
				</Switch>
			</PostContextProvider>
		</Router>
	);
};

export default App;
