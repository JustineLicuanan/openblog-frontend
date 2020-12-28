import { GetStaticProps } from 'next';

import Seo from '../components/Seo';
import { getSortedPostsData, PostData } from '../lib/posts';
import classes from './style.module.scss';

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
							<h2>{title}</h2>
							<h3>
								by {author} | {date}
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
