import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timekeeper from "./Timekeeper";
import { Route } from "react-router-dom";
import Activity from "./Activity";
import FadedBackground from "./FadedBackground";
import { Link } from "react-router-dom";
import TopIcons from "./TopIcons";

const StyledTimekeeperComponent = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	right: ${props => (props.expanded ? "0" : "-375px")};
	transition: all 0.42s ease-in-out;
	/* background-color: red; */
	z-index: 2;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		padding-top: 50px;
		> img {
			position: absolute;
			top: 0;
		}
	}
`;

const ArrowBack = styled.span`
	position: absolute;
	z-index: 1111;
	top: 0;
	left: 0;
	width: 60px;
	height: 80px;
	padding: 15px;
	> img {
		width: 24px;
		height: 24px;
		opacity: 0.7;
	}
`;

const TimeKeeperComponent = (props) => {
const [isToggled, setToggled] = useState(false);
  // let [count, setCount] = useState(0);

	// const useInterval = (() => {
	// 	// Your custom logic here
	// 	setCount(count + 1);
	// }, 1000);

	return (
		<StyledTimekeeperComponent expanded={props.isToggled}>
			<ArrowBack onClick={props.goBack}>
				<img src="/images/arrowBack.png" alt="arrow back" />
			</ArrowBack>

			<FadedBackground opacity={"0.65"} />
			<div>
				<img src="/images/dots.png" alt="dots" />

				<Timekeeper onClickTimer={() => console.log('hejhejhgehj')} />
				<Activity />
			</div>
		</StyledTimekeeperComponent>
	);
};

export default TimeKeeperComponent;
