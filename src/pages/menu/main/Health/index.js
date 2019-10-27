import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context'

const StyledHealth = styled.div`
	display: flex;
`;

const PageHealth = () => {
	const {isAuth} = useContext(UserContext);

	useEffect(() => {

			console.log(isAuth);

	}, [isAuth]);

	return (
		<StyledHealth>
			{isAuth && <h2>Welcome</h2>}
			<h1>Health</h1>
		</StyledHealth>
	);
};

export default PageHealth;
