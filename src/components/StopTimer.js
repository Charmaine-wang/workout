import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../authcontext';

const StyledStopTimer = styled.div`
	display: flex;

	opacity: ${props => (props.showStopBtn ? "1" : "0")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 225px;
	left: 65vw;
	transition: 1s;
	border-radius: 50%;

	background-color: ${props =>
		props.startedBg ? "rgba(0,0,0, 0.6)" : "rgba(130,0,0, 0.9)"};
	/* byt färg till nått nice, eller gör andra animationer */
	border: ${props =>
		props.startedBg ? "12px solid black" : "0px solid rgba(50,0,0, 0.1)"};

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
