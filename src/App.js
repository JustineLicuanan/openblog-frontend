import React from 'react';
import PostList from './components/Post/PostList';
import PostContextProvider from './contexts/PostContext';
import './dist/css/style.min.css';

const App = () => {
	return (
		<PostContextProvider>
			<PostList />
		</PostContextProvider>
	);
};

export default App;
