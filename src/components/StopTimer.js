import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../authcontext';

const StyledStopTimer = styled.div`
	display: flex;
	opacity: ${props => (props.showStopBtn ? "1" : "0")};
	/* opacity: 1; */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 225px;
	left: 65vw;
	transition: ${props => (props.showStopBtn ? "0.7s" : "0.7s")};
	border-radius: 50%;
	background-color: rgba(100,0,0, 1);
	font-size: 18px;
	color: white;
	width: ${props => (props.showStopBtn ? "100px" : "70px")};
	height: ${props => (props.showStopBtn ? "100px" : "70px")};
`;


const StopTimer = (props) => {
	return (
		<StyledStopTimer {...props} onClick={props.onClick}>
			<p> Stop & </p>
			<p> Save </p>
		</StyledStopTimer>
	);
};

export default StopTimer;
