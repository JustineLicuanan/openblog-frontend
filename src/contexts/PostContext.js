import React, { createContext, useReducer } from 'react';
import PostReducer from '../reducers/PostReducer';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [posts, dispatch] = useReducer(PostReducer, [
		{
			id: 1,
			title: '7 Best Javascript Projects to Create in 2021',
			slug: 'best-javascript-projects',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi facilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'justine',
			authorName: 'Justine Licuanan',
		},
		{
			id: 2,
			title: 'How to Create a Blog Application using Javascript?',
			slug: 'create-blog-application-javascript',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi facilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'justine',
			authorName: 'Justine Licuanan',
		},
		{
			id: 3,
			title: '7 Best Backend to Use in 2021',
			slug: 'best-backend',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi facilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'johndoe',
			authorName: 'John Doe',
		},
	]);

	return (
		<PostContext.Provider value={{ posts, dispatch }}>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
