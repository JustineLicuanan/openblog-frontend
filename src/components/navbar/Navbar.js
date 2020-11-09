import React from 'react';
import NavAuthBtns from './NavAuthBtns';
import Navlinks from './Navlinks';
import NavLogo from './NavLogo';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container grid'>
				<NavLogo logo='OpenBlog' />
				<Navlinks />
				<NavAuthBtns />
			</div>
		</div>
	);
};

export default Navbar;
