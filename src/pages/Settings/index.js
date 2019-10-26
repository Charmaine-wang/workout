import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSettings = styled.div`
	display: flex;
`;

const Settings = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledSettings>
			<h1>Settings</h1>
		</StyledSettings>
	);
};

export default Settings;
