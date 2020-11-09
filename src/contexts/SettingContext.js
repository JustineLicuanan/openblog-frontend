import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

const SettingContextProvider = ({ children }) => {
	const [settings, setSettings] = useState({
		title: 'OpenBlog',
		desc: 'Justine Licuanan',
		authorName: 'Justine Licuanan',
		authorLink: 'github.com/justinelicuanan',
		copyrightYear: '2020',
	});

	return (
		<SettingContext.Provider value={{ settings }}>
			{children}
		</SettingContext.Provider>
	);
};

export default SettingContextProvider;
