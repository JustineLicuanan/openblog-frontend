import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';

const PostItem = ({ post }) => {
	const { prettifyDate } = useContext(PostContext);

	return (
		<li className='card'>
			<h1>
				<Link to={`/${post.slug}`}>{post.title}</Link>
			</h1>
			<h5>
				Last updated on {prettifyDate(post.updatedAt)} by{' '}
				<Link to={`/author/${post.authorUsername}`}>{post.authorName}</Link>
			</h5>
			<p>{post.body.substr(0, 220)}...</p>
			<Link className='btn' to={post.slug}>
				Read more
			</Link>
		</li>
	);
};

export default PostItem;
