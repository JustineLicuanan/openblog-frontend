import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import PostItem from './PostItem';

const PostList = () => {
	const { posts } = useContext(PostContext);
	return (
		<div className='blog'>
			<div className='container'>
				<ul className='grid'>
					{posts.map((post) => (
						<PostItem key={post.id} post={post} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default PostList;
