import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Signup from '../../../components/Signup'

const StyledSignup = styled.div`
	display: flex;
`;

const PageSignup = (props) => {
	const [myState, setmyState] = useState(null);


	return (
		<StyledSignup>
			<h1>Signup</h1>
			<Signup />
			<Link to={"/"}>SIGNUP</Link>
		</StyledSignup>
	);
};

export default PageSignup;
