import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import firebase, { firestore } from "../firebase";
import { useAuth } from "../authcontext";

const WeekContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0,0,0, 0.8);
	min-width: 140px;
	height: calc(100vh - 48px - 54px - 58px);
	margin-right: 1px;
	margin-left: 1px;
	overflow: hidden;

	> div {
		margin: 26px 0 0;
		> p {
			color: white;
			font-size: 20px;
			> span {
				font-size: 14px;
			}
		}
	}
	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 60vh;
		max-height: 450px;
	}
`;



const WeekWrapper = ({ ...props }) => {
	const { authUser, authLoading } = useAuth();
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		fetchActivities();
	}, []);

	// get all activities from user
	const fetchActivities = () => {
		firebase
			// setLoading(true);
			.firestore()
			.collection("users")
			.doc(authUser.uid)
			.collection("activities")
			.get()
			.then(activities => {
				const data = [];
				activities.forEach(doc => {
					data.push({ id: doc.id, ...doc.data() });
				});
				// setLoading(false);
				setActivities(data);
			});
	};

	// console.log(activities)
	// activities.forEach(activity => {
	// 	if(activity.type = "running") {
	// 		console.log(activity)
	// 	}
	// })

	const days = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];

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

	let date = new Date();
	let currentDay;
	let currentDate;
	let currentMonth;
	let monthName;
	let dayName;

	// get last 30 days (excluding today)
	for(let i = 0; i < 30; i++) {
		date.setDate(date.getDate() - 1);

		currentDay = date.getDay();
		currentDate = date.getDate();
		currentMonth = date.getMonth();

		monthName = monthNames[currentMonth];
		dayName = days[currentDay];

		// console.log(date)
		// console.log(dayName)
		// console.log(currentDate)
		// console.log(monthName)
		// console.log("----")

		// trying to loop to get 30 last day activities but not working, only working on 1


  return (
		<WeekContainer { ...props }>

			<div>
				<p> {currentDate} <span> {dayName} </span> </p>
			</div>
			<div>
				<Bubble diameter={"100px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
				<Bubble diameter={"90px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
				<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
			</div>

		</WeekContainer>
  );

	};

};


export default WeekWrapper;
