import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMoves = styled.div`
	display: flex;
`;

const Moves = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledMoves>
			<h1>Moves</h1>
		</StyledMoves>
	);
};

export default Moves;
