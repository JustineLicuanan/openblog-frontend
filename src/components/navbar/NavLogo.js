import React, { useContext } from 'react';
import { SettingContext } from '../../contexts/SettingContext';

const NavLogo = () => {
	const { settings } = useContext(SettingContext);

	return <h1 className='logo'>{settings.title}</h1>;
};

export default NavLogo;
