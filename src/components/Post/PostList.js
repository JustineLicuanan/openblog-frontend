import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import PostItem from './PostItem';

const PostList = () => {
	const { posts } = useContext(PostContext);
	return (
		<ul>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</ul>
	);
};

export default PostList;
