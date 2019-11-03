import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../authcontext';

const StyledTimekeeper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: rgba(0, 0, 0, 0.9);
	height: 270px;
	width: 70%;
	border-radius: 100%;
	color: white;
	> h1 {
		font-size: 70px;
	}
	> h3 {
	color:	rgba(255, 255, 255, 0.7);
		font-size: 36px;
	}
`;

const Timekeeper = (props) => {
 const [seconds, setSeconds] = useState(0);
 const [isActive, setIsActive] = useState(false);

 const toggle = () => {
		setIsActive(!isActive);
 }
// let secondstimer = ("0" + (Math.floor(seconds / 1000) % 60)).slice(-2);
// let centiseconds = ("0" + (Math.floor(seconds % 100)).slice(-2);
let secondstimer = ("0" + Math.floor(seconds % 60)).slice(-2);
let minutes = ("0" + (Math.floor(seconds / 60) % 60)).slice(-2);
let hours = ("0" + Math.floor(seconds / 360)).slice(-2);

 useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
 }, [isActive, seconds]);
	return (
		<StyledTimekeeper {...props} onClick={toggle}>
			{/* <h1>{seconds}</h1> */}
			<h1>
				{/* {hours} :  */}
				{minutes} : {secondstimer}
			</h1>
			<h3>{isActive ? "Pause" : "Start"}</h3>
			{/* <h1>34:35</h1>
			<h3>Pause</h3> */}
		</StyledTimekeeper>
	);
};

export default Timekeeper;
