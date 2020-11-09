import React from 'react';
import PropTypes from 'prop-types';

const NavLogo = ({ logo }) => {
	return <h1 className='logo'>{logo}</h1>;
};

NavLogo.propTypes = {
	logo: PropTypes.string.isRequired,
};

export default NavLogo;
