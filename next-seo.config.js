const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const TWITTER_HANDLE_UNAME = process.env.NEXT_PUBLIC_TWITTER_HANDLE_UNAME;
const TWITTER_SITE_UNAME = process.env.NEXT_PUBLIC_TWITTER_SITE_UNAME;

export default {
	openGraph: {
		locale: 'en_US',
		site_name: SITE_NAME,
	},
	twitter: TWITTER_SITE_UNAME
		? {
				handle: TWITTER_HANDLE_UNAME,
				site: TWITTER_SITE_UNAME,
				cardType: 'summary_large_image',
		  }
		: undefined,
};
