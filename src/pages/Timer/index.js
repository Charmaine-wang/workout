import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopIcons from '../../components/TopIcons'


const StyledTimer = styled.div`
	> div:nth-child(1) {
		background-color: rgba(0,0,0,0.3);
		height: 100vh;
		width: 100%;
		position: absolute;
	}

	> div:nth-child(2) {
		background-color: rgba(0,0,0, 0.4);
		height: 216px;
		width: 100%;
		position: absolute;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		> p {
			font-size: 26px;
			color: white;
			z-index: 2;
			padding-bottom: 12px;
		}

		> div {
			width: 230px;
			height: 5px;
			background-color: rgba(255,255,255, 0.3);
			border-radius: 3px;
		}
	}

	> img {
		width: 100%;
		height: 216px;
		opacity: 1;
		margin-bottom: -3px;
	}

`;

const ChoiceWrapper = styled.div`
	width: 100%;
	height: calc(100vh - 216px - 54px);
	/* margin-top: 216px; */

	display: flex;
	flex-direction: column;

	> div {
		width: 100%;
		height: calc(100% / 3);
		background-color: rgba(0,0,0, 0.8);
		border-bottom: 2px solid rgba(255,255,255, 0.1);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&:nth-child(3) {
			border-bottom: none;
		}

		> p {
			font-size: 30px;
			color: white;
			padding: 0px 26px;
		}

		> img {
			width: 130px;
			opacity: 0.12;
		}
	}
`;



const Timer = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledTimer>
				<div/>
				<div>
					<p>CHOOSE MODE</p>
					<div/>
				</div>
				<TopIcons iconSrc='images/timer.png'/>
				<img src="images/timerBg.png" alt="choice background" />

			<ChoiceWrapper>
				<div>
					<img src="images/running.png" alt="choice background" />
					<p> RUNNING </p>
				</div>

				<div>
					<p> CYCLING </p>
					<img src="images/cycling.png" alt="choice background" />
				</div>

				<div>
					<img src="images/walking.png" alt="choice background" />
					<p> WALKING </p>
				</div>
			</ChoiceWrapper>

		</StyledTimer>
	);
};

export default Timer;
