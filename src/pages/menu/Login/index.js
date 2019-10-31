import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Login from "../../../components/Login";
import FadedBackground from "../../../components/FadedBackground";

const StyledLogin = styled.div`
	display: flex;
`;

const PageLogin = (props) => {

	return (
		<div>
			<FadedBackground opacity={'0.3'}/>
			<Login />
		</div>
	);
};

export default PageLogin;
