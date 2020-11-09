import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SettingContextProvider from './contexts/SettingContext';
import PostContextProvider from './contexts/PostContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PostList from './components/blog/PostList';
import SinglePost from './components/blog/SinglePost';
import './dist/css/style.min.css';

const App = () => {
	return (
		<SettingContextProvider>
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
							<SinglePost />
						</Route>
						<Route path='/author/:username' exact>
							<h1>Author's Posts</h1>
						</Route>
					</Switch>
				</PostContextProvider>
				<Footer />
			</Router>
		</SettingContextProvider>
	);
};

export default App;
