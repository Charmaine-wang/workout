import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context'
import TopIcons from '../../../../components/TopIcons'

const StyledMoves = styled.div`

`;

const PageMoves = () => {

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledMoves>
			<TopIcons iconSrc='images/moves.png'/>

			<h1>Moves</h1>
		</StyledMoves>
	);
};

export default PageMoves;
