import React, { useState } from "react";
import {Bubble} from "../index";
import { StyledMonthContainer } from './StyledMonthContainer'


const MonthContainer = props => {
	const [toggleRunning, setToggleRunning] = useState(props);
	const [toggleCycling, setToggleCycling] = useState(props);
	const [toggleWalking, setToggleWalking] = useState(props);
	const [animationR, setAnimationR] = useState(false);
	const [animationC, setAnimationC] = useState(false);
	const [animationW, setAnimationW] = useState(false);

	return (
		<StyledMonthContainer {...props} key={props.key}>
			<div>
				<p> {props.dateDay} </p>
				<p> {props.dateName} </p>
			</div>
			<div>
				<Bubble
					diameter={props.diameterRun}
					onClick={() => { setToggleRunning(!toggleRunning); setAnimationR(true) }}
					onAnimationEnd={() => setAnimationR(false)}
					hourOrKm={toggleRunning ? props.kmRunning : props.hourRunning}
					unit={toggleRunning ? "km" : "hours"}
					icon={"/images/running.png"}
					animationR={animationR}
				/>
				<Bubble
					diameter={props.diameterCyc}
					onClick={() => { setToggleCycling(!toggleCycling); setAnimationC(true) }}
					onAnimationEnd={() => setAnimationC(false)}
					hourOrKm={toggleCycling ? props.kmCycling : props.hourCycling}
					unit={toggleCycling ? "km" : "hours"}
					icon={"/images/cycling.png"}
					animationC={animationC}
				/>
				<Bubble
					diameter={props.diameterWal}
					onClick={() => { setToggleWalking(!toggleWalking); setAnimationW(true) }}
					onAnimationEnd={() => setAnimationW(false)}
					hourOrKm={toggleWalking ? props.kmWalking : props.hourWalking}
					unit={toggleWalking ? "km" : "hours"}
					icon={"/images/walking.png"}
					animationW={animationW}
				/>
			</div>
		</StyledMonthContainer>
	);
};

export default MonthContainer;
