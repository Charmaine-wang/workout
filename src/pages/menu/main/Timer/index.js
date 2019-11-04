import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context'
import TopIcons from '../../../../components/TopIcons'
import FadedBackground from '../../../../components/FadedBackground'

import { Link } from "react-router-dom";
import TimeKeeperComponent from '../../../../components/TimeKeeperComponent';

const StyledPageTimer = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;
const StyledTimer = styled.div`
	position: absolute;
	height: 100%;
	overscroll-behavior-x: hidden;
	right: ${props => (props.cover ? "375px" : "0")};
	transition: all 0.42s ease-in-out;
	/* display: ${props => (props.cover ? "none" : "block")}; */
	> div:nth-child(1) {
		background-color: rgba(0, 0, 0, 0.4);
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
			background-color: rgba(255, 255, 255, 0.3);
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
	display: flex;
	flex-direction: column;
	> div {
		height: 100%;
		background-color: rgba(0,0,0, 0.8);

		&:nth-child(3) a {
			border-bottom: none;
		}
	}
	> div {
		width: 100%;
		height: 100%;
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		> p {
			font-size: 30px;
			color: white;
			padding: 0px 26px;
		}
		> img {
			width: 16vh;
			opacity: 0.12;
		}
	}
`;


const PageTimer = () => {
const [isToggled, setToggled] = useState(false);
	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledPageTimer>
			<FadedBackground opacity={"0.7"} />
			<TimeKeeperComponent
				isToggled={isToggled}
				goBack={() => setToggled(false)}
			/>

			<StyledTimer cover={isToggled}>
				<div>
					<p>CHOOSE MODE</p>
					<div />
				</div>
				<TopIcons iconSrc="/images/timer.png" hideArrow={isToggled} />
				<img src="images/timerBg.png" alt="choice background" />
				{/* <TimeKeeperComponent isToggled={isToggled} goBack={() => setToggled(false)}/> */}

				<ChoiceWrapper>
					<div onClick={() => setToggled(true)}>
						<img src="/images/running.png" alt="choice background" />
						<p> RUNNING </p>
					</div>

					<div>
						<p> CYCLING </p>
						<img src="/images/cycling.png" alt="choice background" />
					</div>

					<div>
						<img src="/images/walking.png" alt="choice background" />
						<p> WALKING </p>
					</div>
				</ChoiceWrapper>
			</StyledTimer>
		</StyledPageTimer>
	);
};

export default PageTimer;
