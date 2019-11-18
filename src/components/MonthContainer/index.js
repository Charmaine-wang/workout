import React, { useState } from "react";
import {Bubble} from "../index";
import { StyledMonthContainer } from './StyledMonthContainer'


const MonthContainer = props => {
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
					hourOrKm={toggleWalking ? props.kmWalking : props.hourWalking}
					unit={"km"}
					icon={"/images/walking.png"}
				/>
			</div>
		</StyledMonthContainer>
	);
};

export default MonthContainer;
