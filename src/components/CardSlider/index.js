import React from "react";
import { NavLink } from "react-router-dom";
import { StyledCardSlider } from './StyledCardSlider'

const CardSlider = props => {
	return (
		<StyledCardSlider>
			<NavLink to={props.cardLink}>
				<div>
					<p>{props.cardName}</p>
					<img src={props.cardImg} alt="icon" />
				</div>
			</NavLink>
		</StyledCardSlider>
	);
};

export default CardSlider;
