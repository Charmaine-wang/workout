import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const StyledActivity = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	height: 60%;
	width: 100%;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 55%;
		width: 100%;

		> img {
			position: absolute;
			top: 10%;
			width: 155px;
			height: 155px;
			z-index: 0;
			opacity: 0.1;
		}

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			> img {
				position: absolute;
				width: 130px;
				height: 130px;
				opacity: 0.1;
			}
		}
	}
	> div:last-child {
		display: flex;
		flex-direction: column;
		background-color: rgba(0,0,0, 0.8);
		margin-top: 2px;
		> p {
			position: absolute;
			top: 15%;
			color: rgba(255, 255, 255, 0.7);
			font-size: 22px;
		}
		> p:last-child {
			top: 30%;
			color: #ffffff;
			font-size: 40px;
		}
	}
	> div:first-child {
		display: flex;
		justify-content: space-between;
		height: 45%;
		width: 100%;

		> div {
			background-color: rgba(0,0,0, 0.8);
			width: 100%;
			/* width: calc(50% - 1px); */
			height: 100%;
			> p {
			position: absolute;
			top: 20%;
			color: rgba(255, 255, 255, 0.7);
				font-size: 22px;
			}
			> p:last-child {
				color: #ffffff;
				top: 35%;
				font-size: 40px;
			}
		}
	}
`;

const Activity = (props) => {
		const [myState, setmyState] = useState(null);


    useEffect(() => {

    }, []);

    return (
			<StyledActivity {...props}>
				<div>
					<div>
						<img src="/images/km.png" alt="bajs" />
						<p>Kilometers</p>
						<p>{props.distance} km</p>
					</div>
					{/* <div>
						<img src="/images/burn.png" alt="bajs" />
						<p>Calories</p>
						<p>365 kcal</p>
					</div> */}
				</div>
				<div>
					<img src="/images/speed.png" alt="" />
					<p>Average speed</p>
					<p>6.2 km/h</p>
				</div>
			</StyledActivity>
		);
};

export default Activity;
