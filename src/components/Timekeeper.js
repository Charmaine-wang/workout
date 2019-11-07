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
	background-color: ${props => props.startedBg ? 'rgba(0,0,0, 0.6)' : 'rgba(0,0,0, 0.9)'};
	/* byt färg till nått nice, eller gör andra animationer */
	border: ${props => props.startedBg ? '12px solid black' : '0px solid rgba(50,0,0, 0.1)'};
	> h1 {
		font-size: 70px;
	}
	> h3 {
		color: rgba(255, 255, 255, 0.7);
		font-size: 36px;
	}
	width: 270px;
	height: 270px;

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
