import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timekeeper from "./Timekeeper";
import { useAuth } from "../authcontext";
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
const { authUser, authLoading } = useAuth();
// const [isToggled, setToggled] = useState(false);
 const [seconds, setSeconds] = useState(0);
 const [isActive, setIsActive] = useState(false);

// STOPS WATCH
// navigator.geolocation.clearWatch(watchID);

// function calculating distance
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  let R = 6371; // km
  let dLat = (lat2 - lat1).toRad();
  let dLon = (lon2 - lon1).toRad();
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
}
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}
		const startDistance = () => {
			let startPos;
			// const navigatorDistance =
			navigator.geolocation.watchPosition(position => {
				startPos = position;
				let finalDistance = calculateDistance(
					startPos.coords.latitude,
					startPos.coords.longitude,
					position.coords.latitude,
					position.coords.longitude

				);
				// console.log(finalDistance);
				 return finalDistance;
			});
			console.log(navigator.geolocation.watchPosition);
			// return navigatorDistance.finalDistance;
		};


 const toggleTimer = () => {
		setIsActive(!isActive);
 };
 // let secondstimer = ("0" + (Math.floor(seconds / 1000) % 60)).slice(-2);
 // let centiseconds = ("0" + (Math.floor(seconds % 100)).slice(-2);
 let secondstimer = ("0" + Math.floor(seconds % 60)).slice(-2);
 let minutes = ("0" + (Math.floor(seconds / 60) % 60)).slice(-2);
 let hours = ("0" + Math.floor(seconds / 360)).slice(-2);

 useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
 }, [isActive, seconds]);

console.log(startDistance());
	return (
		<StyledTimekeeperComponent expanded={props.isToggled}>
			<ArrowBack onClick={props.goBack}>
				<img src="/images/arrowBack.png" alt="arrow back" />
			</ArrowBack>

			<FadedBackground opacity={"0.65"} />
			<div>
				<img src="/images/dots.png" alt="dots" />

				<Timekeeper onClick={toggleTimer} isActive={isActive ? "Pause" : "Start"} minutes={minutes} seconds={secondstimer}/>
				<Activity distance={startDistance()} />
			</div>
		</StyledTimekeeperComponent>
	);
};

export default TimeKeeperComponent;