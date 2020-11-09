import React, { useContext, useEffect } from 'react';
import { SettingContext } from '../../contexts/SettingContext';
import { PostContext } from '../../contexts/PostContext';
import PostItem from './PostItem';

const PostList = () => {
	const { settings } = useContext(SettingContext);
	const { posts } = useContext(PostContext);

	useEffect(() => {
		document.title = `${settings.title} | ${settings.desc}`;
	});

	return (
		<section className='blog'>
			<ul className='container grid'>
				{posts.map((post, index) => (
					<PostItem key={index} index={index} post={post} />
				))}
			</ul>
		</section>
	);
};

export default PostList;
