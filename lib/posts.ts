import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export interface PostData {
	id: string;
	title: string;
	date: Date;
	author: string;
	contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = async () => {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = await Promise.all(
		fileNames.map(async (fileName) => {
			// Remove ".md" from file name to get id
			const id = fileName.replace(/\.md$/, '');

			// Read markdown file as string
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf8');

			// Use gray-matter to parse the post metadata section
			const matterResult = matter(fileContents);

			// Use remark to convert markdown into HTML string
			const processedContent = await remark()
				.use(html)
				.process(matterResult.content);
			const contentHtml = processedContent.toString();

			// Combine the data with the id
			return {
				id,
				contentHtml,
				...matterResult.data,
			};
		}) as Promise<PostData>[]
	);
	// Sort posts by date
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostData = async (id: string) => {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	} as PostData;
};
