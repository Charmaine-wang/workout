import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimekeeper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: rgba(0, 0, 0, 0.9);
	height: 270px;
	width: 70%;
	border-radius: 100%;
	color: white;
	> h1 {
		font-size: 70px;
	}
	> h3 {
	color:	rgba(255, 255, 255, 0.7);
		font-size: 36px;
	}
`;

const Timekeeper = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledTimekeeper>
			<h1>34:35</h1>
			<h3>Pause</h3>
		</StyledTimekeeper>
	);
};

export default Timekeeper;
