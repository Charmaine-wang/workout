import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timekeeper from "./Timekeeper";
import StopTimer from "./StopTimer";
import { useAuth } from "../authcontext";
import { Route } from "react-router-dom";
import Activity from "./Activity";
import FadedBackground from "./FadedBackground";
import firebase, { firestore } from "../firebase";
import Modal from "./Modal";

const StyledTimekeeperComponent = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	right: ${props => (props.expanded ? "0" : "-100vw")};
	transition: all 0.42s ease-in-out;
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
			width: 100%;
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
 	const [seconds, setSeconds] = useState(0);
 	const [isActive, setIsActive] = useState(false);
	const [prevPosition, setPrevPosition] = useState(null);
	let [finalDistanceKm, setFinalDistanceKm] = useState(0);
	const [saveWorkout, setSaveWorkout] = useState(isActive)


	// function calculating distance
	const calculateDistance = (lat1, lon1, lat2, lon2) => {
	  let R = 6371;
	  let dLat = toRad(lat2 - lat1);
	  let dLon = toRad(lon2 - lon1);
	  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
	          Math.sin(dLon / 2) * Math.sin(dLon / 2);
	  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  let d = R * c;
	  return d;
	}

	const toRad = (Value) => {
  	return Value * Math.PI / 180;
	}

	let startLatitude;
	let startLongitude;
	let currentLatitude;
	let currentLongitude;

	const navigateDistance = () => {
		let options = {
			enableHighAccuracy: true
		};

		const error = (err) => {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( position => {
			const currentLocation = position.coords;
			let calcDist = null;

			if (currentLocation && prevPosition) {
				calcDist = calculateDistance(
					prevPosition.latitude,
					prevPosition.longitude,
					currentLocation.latitude,
					currentLocation.longitude
				);
			}

			if (calcDist) {
				let totalDistance = finalDistanceKm + calcDist;
				setFinalDistanceKm(totalDistance);
				console.log("har satt ny final " + totalDistance);
			}
			setPrevPosition(currentLocation);
		})
	}
};

	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	let secondstimer = ("0" + Math.floor(seconds % 60)).slice(-2);
	let minutes = ("0" + (Math.floor(seconds / 60) % 60)).slice(-2);
	let hours = ("0" + Math.floor(seconds / 3600)).slice(-2);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

  const date = new Date()
	const dateNum = date.getDate()
	const month = monthNames[date.getMonth()]

	const fetchWorkout = event => {
		firebase
		.firestore()
		.collection("users")
		.doc(authUser.uid)
		.collection("activities")
		.doc()
		.set({
			type: props.getActivity,
			activitytime: { minutes, seconds },
			kcal: caloriesBurned,
			distance: totalDistanceRounded,
			dateNum: dateNum,
			month: month
		});
	};


	useEffect(() => {
		navigateDistance();
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

	// round final distance to 2 decimals in km
	let totalDistanceRounded = Number(finalDistanceKm).toFixed(2);

	// average speed in km per hour
	let averageSpeed = Number(totalDistanceRounded / seconds * 60 * 60).toFixed(1);
	if(averageSpeed == 'NaN' || averageSpeed == 'Infinity') {
		averageSpeed = '0.0';
	}

	// calories burned during training session
	let activityMET;
	let activityType = props.getActivity; // choosen activity type

	//if walking elr running räkna på km istället, else blir cycklign ta andra värden
	if (activityType == "running") {
		activityMET = 9.8; // about 9.8 MET value when running
	} else if (activityType == "walking") {
		activityMET = 3.8; // about 3.8 MET value when walking
	} else if (activityType == "cycling") {
		activityMET = 9.5; // about 3.8 MET value when cycling
	}

	//formula total calories burned = Duration (in minutes)*(MET*3.5*weight in kg)/200
	let caloriesBurned = Math.round((seconds / 60) * (activityMET * 3.5 * authUser.weight)/200);


	return (
		<StyledTimekeeperComponent expanded={props.isToggled} onSubmit={isActive}>

			<ArrowBack
				{...props}
				onClick={() => {
					totalDistanceRounded >= 0.01 && fetchWorkout();
					props.goBack();
					setSeconds(0);
					setIsActive(false);
					setSaveWorkout(false)
				}}
			>

				<img src="/images/arrowBack.png" alt="arrow back" />
			</ArrowBack>

			<FadedBackground opacity={"0.55"} />
			<div>
				<img src="/images/dots.png" alt="dots" />

				<Timekeeper
					onClick={toggleTimer}
					isActive={isActive ? "Pause" : "Start"}
					minutes={minutes}
					seconds={secondstimer}
					isActiveBtn={isActive}
				/>

				<StopTimer
					onClick={() => {
						setFinalDistanceKm(0);
						setSaveWorkout(true);
						setIsActive(false)
						setSeconds(0);
						fetchWorkout();
						setTimeout(() => setSaveWorkout(false), 1800);
					}}
					showStopBtn={totalDistanceRounded >= 0.01}
				/>

				<Modal isActive={saveWorkout} />
				<Activity
					distance={totalDistanceRounded}
					averageSpeed={averageSpeed}
					caloriesBurned={caloriesBurned}
				/>

			</div>
		</StyledTimekeeperComponent>
	);
};

export default TimeKeeperComponent;
