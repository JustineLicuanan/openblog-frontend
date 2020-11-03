import React from 'react';

const PostItem = ({ post }) => {
	return (
		<li>
			<h1>{post.title}</h1>
			<h5>
				by: <a href={`/users/${post.userId}`}>{post.authorName}</a>
			</h5>
			<p>{post.body}</p>
		</li>
	);
};

export default PostItem;
