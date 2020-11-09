import React from 'react';
import { Link } from 'react-router-dom';

const NavAuthBtns = () => {
	return (
		<ul className='flex'>
			<li>
				<Link className='btn btn-transparent' to='/login'>
					Login
				</Link>
			</li>
			<li>
				<Link className='btn btn-secondary' to='/register'>
					Register
				</Link>
			</li>
		</ul>
	);
};

export default NavAuthBtns;
