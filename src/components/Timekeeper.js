import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../authcontext';

const StyledTimekeeper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	transition: 0.2s;
	border-radius: 50%;
	color: white;
	background-color: rgba(0,0,0, 0.9);

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(255,255,255, 0.2);
		}
		70% {
			box-shadow: 0 0 0 24px rgba(255,255,255, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255,255,255, 0);
		}
	}

	animation: ${props => props.startedBg ? 'pulse 2s infinite' : 'none' };

	/* byt färg till nått nice, eller gör andra animationer */
	> h1 {
		font-size: 70px;
	}
	> h3 {
		color: rgba(255, 255, 255, 0.7);
		font-size: 36px;
	}
	width: 250px;
	height: 250px;

`;


const Timekeeper = (props) => {
	return (
		<StyledTimekeeper {...props} onClick={props.onClick}>
			<h1>
				{props.minutes}:{props.seconds}
			</h1>
			<h3>
				{props.isActive}
			</h3>
		</StyledTimekeeper>
	);
};

export default Timekeeper;
