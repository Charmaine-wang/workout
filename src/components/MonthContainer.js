import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Bubble from "./Bubble"
const StyledMonthContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	min-width: 140px;
	height: calc(100vh - 48px - 54px - 58px);
	border-right: 2px solid rgba(255, 255, 255, 0.1);
	overflow: hidden;

	> div {
		margin: 20px 0 0;
		> p {
			text-align: center;
			color: white;
			font-size: 20px;
		}
		> p:nth-child(2) {
			font-size: 15px;
			letter-spacing: 0.8px;
		}
	}
	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 60vh;
		max-height: 450px;
	}
`;

const MonthContainer = (props) => {

	const [toggleRunning, setToggleRunning] = useState(props);
	const [toggleCycling, setToggleCycling] = useState(props);
	const [toggleWalking, setToggleWalking] = useState(props);

	return (
		<StyledMonthContainer {...props} key={props.key}>
			<div>
				<p> {props.dateDay} </p>
				<p> {props.dateName} </p>
			</div>
			<div>
				<Bubble
					diameter={"100px"}
					onClick={() => setToggleRunning(!toggleRunning)}
					hourOrKm={toggleRunning ? props.kmRunning : props.hourRunning}
					unit={"km"}
					icon={"/images/running.png"}
				/>
				<Bubble
					diameter={"90px"}
					onClick={() => setToggleCycling(!toggleCycling)}
					hourOrKm={toggleCycling ? props.kmCycling : props.hourCycling}
					unit={"km"}
					icon={"/images/cycling.png"}
				/>
				<Bubble
					diameter={"80px"}
					onClick={() => setToggleWalking(!toggleWalking)}
					// hourOrKm={day.walkingfinalKm}
					hourOrKm={toggleWalking ? props.kmWalking : props.hourWalking}
					unit={"km"}
					icon={"/images/walking.png"}
				/>
			</div>
		</StyledMonthContainer>
	);
};

export default MonthContainer;
