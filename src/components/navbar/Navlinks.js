import React, { useState } from 'react';
import Navlink from './Navlink';

const Navlinks = () => {
	const [navlinks, setNavlinks] = useState([
		{
			name: 'Home',
			to: '/',
		},
		{
			name: 'About',
			to: '/about',
		},
		{
			name: 'Contact',
			to: '/contact',
		},
	]);

	return (
		<nav>
			<ul className='flex'>
				{navlinks.map((link, index) => (
					<Navlink key={index} link={link} />
				))}
			</ul>
		</nav>
	);
};

export default Navlinks;
