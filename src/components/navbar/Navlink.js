import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navlink = ({ link }) => {
	return (
		<li>
			<Link to={link.to}>{link.name}</Link>
		</li>
	);
};

Navlink.propTypes = {
	link: PropTypes.object.isRequired,
};

export default Navlink;
