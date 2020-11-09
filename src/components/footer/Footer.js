import React, { useContext } from 'react';
import { SettingContext } from '../../contexts/SettingContext';

const Footer = () => {
	const { settings } = useContext(SettingContext);

	return (
		<footer className='footer'>
			<div className='container flex'>
				<p>
					Coded with ❤️ by{' '}
					<a
						href={`//${settings.authorLink}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						{settings.authorName}
					</a>{' '}
					&copy; {settings.copyrightYear}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
