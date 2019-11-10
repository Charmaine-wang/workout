import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timekeeper from "./Timekeeper";
import { useAuth } from "../authcontext";
import { Route } from "react-router-dom";
import Activity from "./Activity";
import FadedBackground from "./FadedBackground";
import firebase, { firestore } from "../firebase";

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
	// const [isToggled, setToggled] = useState(false);
 	const [seconds, setSeconds] = useState(0);
 	const [isActive, setIsActive] = useState(false);
	const [startedBg, setStartedBg] = useState(false);
	const [prevPosition, setPrevPosition] = useState(null);
	let [finalDistanceKm, setFinalDistanceKm] = useState(0);
	const [updateDistance, setUpdateDistance] = useState(0)


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

	let startLatitude;
	let startLongitude;
	let currentLatitude;
	let currentLongitude;

	const NavigateDistance = () => {
		let options = {
			enableHighAccuracy: true
		};

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( position => {
			const currentLocation = position.coords
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
		setStartedBg(!startedBg)
	};

	let secondstimer = ("0" + Math.floor(seconds % 60)).slice(-2);
	let minutes = ("0" + (Math.floor(seconds / 60) % 60)).slice(-2);
	let hours = ("0" + Math.floor(seconds / 360)).slice(-2);

	// insert workout in database
	const handleChange = event => {
		event.preventDefault();

		firestore
			.collection("users")
			.doc(authUser.uid)
			.collection("activity")
			.add({
				activitytime: { minutes, seconds },
				kcal: caloriesBurned,
				distance: totalDistanceRounded
				// weight: 0,
				// length: 0
			});
	};


	// kanske nått sånthär för att ta ut data?
	// const [workout, setWorkout] = useState([]);
	// const fetchWorkout = () => {
  //   firebase
  //     .collection('activity')
  //     .where('users', '==', authUser.uid)
  //     .get()
  //     .then(workout => {
  //       const data = [];
  //       workout.forEach(doc => {
  //         data.push({ id: doc.id, ...doc.data() });
  //       });
  //       setWorkout(data);
  //     });
  // };


	useEffect(() => {
		NavigateDistance();

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
	let activityType = props.isActivity; // choosen activity type

	if (activityType == "running") {
		activityMET = 9.8; // about 9.8 MET value when running
	} else if (activityType == "cycling") {
		activityMET = 9.5; // about 3.8 MET value when cycling
	} else if (activityType == "walking") {
		activityMET = 3.8; // about 3.8 MET value when walking
	}

	//FORMULA Total calories burned = Duration (in minutes)*(MET*3.5*weight in kg)/200
	let userWeight = 65; // take this from database
	let caloriesBurned = Math.round((seconds / 60) * (activityMET * 3.5 * userWeight)/200);

	// console.log(authUser);

	return (
		<StyledTimekeeperComponent expanded={props.isToggled} onSubmit={isActive && handleChange}>
			<ArrowBack onClick={props.goBack}>
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
					startedBg={startedBg}
				/>
				<Activity distance={totalDistanceRounded} averageSpeed={averageSpeed} caloriesBurned={caloriesBurned} />
			</div>
		</StyledTimekeeperComponent>
	);
};

export default TimeKeeperComponent;
