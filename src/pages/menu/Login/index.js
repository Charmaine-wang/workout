import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Login from "../../../components/Login";

const StyledLogin = styled.div`
	display: flex;
`;

const PageLogin = (props) => {

	return (
		<div>
			<Login />
		</div>
	);
};

export default PageLogin;
