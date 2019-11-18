import React, { useState, useEffect } from "react";
import { StyledHealthComponent } from './StyledHealthComponent'

const HealthComponent = props => {
	return (
		<StyledHealthComponent>
			<p> {props.title} </p>
			<div>
				<p> {props.firstValue} </p>
				<p> {props.secondValue} </p>
			</div>
		</StyledHealthComponent>
	);
};

export default HealthComponent;
