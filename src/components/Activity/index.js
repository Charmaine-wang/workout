import React, { useState, useEffect } from "react";
import { StyledActivity } from './StyledActivity'

const Activity = props => {

	return (
		<StyledActivity {...props}>
			<div>
				<div>
					<img src="/images/km.png" alt="bajs" />
					<p>Kilometers</p>
					<p>{props.distance} km</p>
				</div>
				<div>
					<img src="/images/burn.png" alt="bajs" />
					<p>Calories Burned</p>
					<p>{props.caloriesBurned} kcal</p>
				</div>
			</div>
			<div>
				<img src="/images/speed.png" alt="" />
				<p>Average Speed</p>
				<p>{props.averageSpeed} km/h</p>
			</div>
		</StyledActivity>
	);
};

export default Activity;
