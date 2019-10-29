import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import SignIn from '../../../../components/SignIn'
const StyledLogin = styled.div`
	display: flex;
`;

const PageLogin = (props) => {

	return (
		<StyledLogin {...props}>
			<SignIn {...props}/>
		</StyledLogin>
	);
};

export default PageLogin;