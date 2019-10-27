import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
	display: flex;
`;

const PageTimer = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledTimer>
			<h1>Timer</h1>
		</StyledTimer>
	);
};

export default PageTimer;
