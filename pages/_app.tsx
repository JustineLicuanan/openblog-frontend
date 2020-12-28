import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import SEO from '../next-seo.config';
import '../scss/style.scss';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
