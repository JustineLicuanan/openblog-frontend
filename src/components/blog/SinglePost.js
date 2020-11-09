import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SettingContext } from '../../contexts/SettingContext';
import { PostContext } from '../../contexts/PostContext';

const SinglePost = () => {
	const { slug } = useParams();
	const { settings } = useContext(SettingContext);
	const { posts, prettifyDate } = useContext(PostContext);
	const post = posts.find((post) => post.slug === slug);

	useEffect(() => {
		document.title = `${post.title} | ${settings.title}`;
	});

	return (
		<section className='post'>
			<div className='container'>
				<div className='card'>
					<h1>{post.title}</h1>
					<h5>
						Last updated on {prettifyDate(post.updatedAt)} by{' '}
						<Link to={`/author/${post.authorUsername}`}>{post.authorName}</Link>
					</h5>
					<p>{post.body}</p>
				</div>
			</div>
		</section>
	);
};

export default SinglePost;
