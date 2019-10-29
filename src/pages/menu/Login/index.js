import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SignIn from '../../../components/SignIn'

const PageLogin = (props) => {
	console.log(props);
	return (
		<div>
			<SignIn />
		</div>
	);
};

export default PageLogin;
