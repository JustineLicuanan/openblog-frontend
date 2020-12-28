import { GetStaticProps } from 'next';
import Link from 'next/link';

import Seo from '../components/Seo';
import { getSortedPostsData, PostData } from '../lib/posts';
import classes from './style.module.scss';
import Date from '../components/Date';

interface Props {
	allPostsData: PostData[];
}

const Home = ({ allPostsData }: Props) => {
	return (
		<>
			<Seo
				title='Home'
				description='a blog about Javascript, and made with Javascript'
				route='/'
			/>

			<div className={classes.container}>
				<ul className={classes.flex}>
					{allPostsData.map(({ id, title, date, author, contentHtml }) => (
						<li key={id} className={classes.item}>
							<Link href={`/posts/${id}`}>
								<a className={classes.title}>
									<h2>{title}</h2>
								</a>
							</Link>
							<h3 className={classes.meta}>
								by {author} | Last updated on <Date dateString={date} />
							</h3>
							<div
								dangerouslySetInnerHTML={{
									__html:
										contentHtml.length > 150
											? `${contentHtml.slice(0, 150).trim()}...`
											: contentHtml,
								}}
								className={classes.content}
							/>
							<Link href={`/posts/${id}`}>
								<a className={classes.readMoreBtn}>Read more</a>
							</Link>
							<hr />
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = await getSortedPostsData();
	return { props: { allPostsData } };
};

export default Home;
