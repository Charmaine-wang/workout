import React from "react";
import { NavLink } from "react-router-dom";
import { StyledArrowBack } from "./StyledArrowBack"



const ArrowBack = props => {
	return (
		<StyledArrowBack {...props}>
			<NavLink exact="true" to={"/"}>
				<img src="/images/arrowBack.png" alt="arrow back" />
			</NavLink>
		</StyledArrowBack>
	);
};

export default ArrowBack;
