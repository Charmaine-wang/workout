import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHealth = styled.div`
	display: flex;
`;

const Health = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledHealth>
			<h1>Health</h1>
		</StyledHealth>
	);
};

export default Health;
