import React, { createContext, useReducer } from 'react';
import PostReducer from '../reducers/PostReducer';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [posts, dispatch] = useReducer(PostReducer, [
		{
			title: '7 Best Javascript Projects to Create in 2021',
			slug: 'best-javascript-projects',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi fascilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'justine',
			authorName: 'Justine Licuanan',
			createdAt: '2020-10-14T06:01:01.001+00:00',
			updatedAt: '2020-10-14T06:01:01.001+00:00',
		},
		{
			title: 'How to Create a Blog Application using Javascript?',
			slug: 'create-blog-application-javascript',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi fascilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'justine',
			authorName: 'Justine Licuanan',
			createdAt: '2020-10-14T06:01:01.001+00:00',
			updatedAt: '2020-10-14T06:01:01.001+00:00',
		},
		{
			title: '7 Best Backend to Use in 2021',
			slug: 'best-backend',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam quisquam adipisci voluptas ullam eligendi fascilis libero quam cumque est laborum voluptatibus consequatur suscipit error eum dolor autem, earum, totam ipsam?',
			authorUsername: 'johndoe',
			authorName: 'John Doe',
			createdAt: '2020-10-14T06:01:01.001+00:00',
			updatedAt: '2020-10-14T06:01:01.001+00:00',
		},
	]);

	const prettifyDate = (date) =>
		`${
			[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			][parseInt(date.substr(5, 2)) - 1]
		} ${date.substr(8, 2)}, ${date.substr(0, 4)}`;

	return (
		<PostContext.Provider value={{ posts, dispatch, prettifyDate }}>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
