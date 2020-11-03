import React, { createContext, useReducer } from 'react';
import PostReducer from '../reducers/PostReducer';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [posts, dispatch] = useReducer(PostReducer, [
		{
			id: 1,
			title: '7 Best Javascript Projects to Create in 2021',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae iste obcaecati porro explicabo quam iusto dolorum? Odit veniam minus, eligendi hic ea non officiis dolorem adipisci ad accusamus officia!',
			userId: 1,
			authorName: 'Justine Licuanan',
		},
		{
			id: 2,
			title: 'How to Create a Blog Application using Javascript?',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae iste obcaecati porro explicabo quam iusto dolorum? Odit veniam minus, eligendi hic ea non officiis dolorem adipisci ad accusamus officia!',
			userId: 1,
			authorName: 'Justine Licuanan',
		},
		{
			id: 3,
			title: '7 Best Backend to Use in 2021',
			body:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repudiandae iste obcaecati porro explicabo quam iusto dolorum? Odit veniam minus, eligendi hic ea non officiis dolorem adipisci ad accusamus officia!',
			userId: 2,
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
