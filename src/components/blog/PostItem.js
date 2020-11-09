import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
	return (
		<li className='card'>
			<h1>
				<Link to={`/${post.slug}`}>{post.title}</Link>
			</h1>
			<h5>
				by: <Link to={`/author/${post.authorUsername}`}>{post.authorName}</Link>
			</h5>
			<p>{post.body.substr(0, 220)}...</p>
			<Link className='btn' to={post.slug}>
				Read more
			</Link>
		</li>
	);
};

export default PostItem;
