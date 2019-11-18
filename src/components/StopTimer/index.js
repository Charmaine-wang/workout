import React from "react";
import { StyledStopTimer } from './StyledStopTimer'


const StopTimer = props => {
	return (
		<StyledStopTimer {...props} onClick={props.onClick}>
			<p> SAVE SESSION </p>
		</StyledStopTimer>
	);
};

export default StopTimer;
