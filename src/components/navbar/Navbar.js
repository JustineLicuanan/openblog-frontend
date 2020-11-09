import React from 'react';
import NavAuthBtns from './NavAuthBtns';
import Navlinks from './Navlinks';
import NavLogo from './NavLogo';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container grid'>
				<NavLogo />
				<Navlinks />
				<NavAuthBtns />
			</div>
		</div>
	);
};

export default Navbar;
