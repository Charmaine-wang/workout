import React from "react";
import {StyledTimekeeper} from './StyledTimeKeeper'

const Timekeeper = props => {
	return (
		<StyledTimekeeper {...props} onClick={props.onClick}>
			<h1>
				{props.minutes}:{props.seconds}
			</h1>
			<h3>{props.isActive}</h3>
		</StyledTimekeeper>
	);
};

export default Timekeeper;
