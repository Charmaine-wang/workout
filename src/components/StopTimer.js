import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../authcontext';

const StyledStopTimer = styled.div`
	display: flex;
	/* opacity: ${props => props.showStopBtn ? "1" : "0"}; */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: ${props => props.showStopBtn ? "-10px" : "-60px"};
	left: calc(50vw - 110px);
	transition: ${props => props.showStopBtn ? "0.4s" : "0.4s"};
	border-radius: 6px;
	background-color: rgba(255, 255, 255, 0.3);
	/* border: 2px solid rgba(255,255,255, 0.3); */
	font-size: 18px;
	letter-spacing: 1.2px;
	color: white;
	width: 220px;
	height: 44px;
	box-shadow: 0px 0px 20px rgba(0,0,0,0.4);

	> p {
		font-weight: 400;
		margin-top: 10px;
		text-shadow: 0px 0px 20px black;
	}

		/* @keyframes pulse {
			0% {
				box-shadow: 0 0 0 0 rgba(0,0,0, 0.2);
			}
			70% {
				box-shadow: 0 0 0 10px rgba(0,0,0, 0);
			}
			100% {
				box-shadow: 0 0 0 0 rgba(0,0,0, 0);
			}
		} */

		/* animation: ${props => props.showStopBtn ? 'pulse 2s infinite' : 'none' }; */

`;


const StopTimer = (props) => {
	return (
		<StyledStopTimer {...props} onClick={props.onClick}>
			<p> SAVE SESSION </p>
		</StyledStopTimer>
	);
};

export default StopTimer;
