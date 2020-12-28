import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import Seo from '../../../components/Seo';
import { getPostData, PostData, getAllPostIds } from '../../../lib/posts';
import classes from './style.module.scss';
import Date from '../../../components/Date';

interface Props {
	postData: PostData;
}

const Post = ({ postData }: Props) => {
	return (
		<>
			<Seo
				title={postData.title}
				description={
					postData.contentHtml.replace(/(<([^>]+)>)/gi, '').length > 150
						? postData.contentHtml
								.replace(/(<([^>]+)>)/gi, '')
								.slice(0, 150)
								.trim()
						: postData.contentHtml.replace(/(<([^>]+)>)/gi, '').trim()
				}
				route={`/posts/${postData.id}`}
			/>

			<div className={classes.container}>
				<h1>{postData.title}</h1>
				<h3>
					by {postData.author} | Last updated on{' '}
					<Date dateString={postData.date} />
				</h3>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<Link href='/'>
					<a className={classes.goBackBtn}>{'<'} Go back</a>
				</Link>
			</div>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: getAllPostIds(),
	fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.id as string);
	return { props: { postData } };
};

export default Post;
