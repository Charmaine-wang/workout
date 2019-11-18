import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import firebase, { firestore } from "../firebase";
import { useAuth } from "../authcontext";
import ReactDOM from 'react-dom';

const MonthContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0,0,0, 0.8);
	min-width: 140px;
	height: calc(100vh - 48px - 54px - 58px);
	border-right: 2px solid rgba(255, 255, 255, 0.1);
	overflow: hidden;

	> div {
		margin: 20px 0 0;
		> p {
			text-align: center;
			color: white;
			font-size: 20px;
		}
		> p:nth-child(2) {
			font-size: 15px;
			letter-spacing: 0.8px;
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

const Horisontal = styled.div`
	display: flex;
	flex-direction: row;
`;


const MonthWrapper = ({ ...props }) => {
	const [monthActivities, setMonthActivities] = useState([]);
	const { authUser, authLoading } = useAuth();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
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

	useEffect(() => {
		fetchMonthActivities();
	}, []);

	const fetchMonthActivities = () => {
		firebase
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
			setMonthActivities(data);
		});
	};

	let date = new Date();
	let day;
	let dateNum;
	let month;
	let monthName;
	let dayName;
	let calendar = [];

	// set 1 day forwards to also get today
	date.setDate(date.getDate() + 1);

	for(let i = 0; i < 30; i++) {
		//set the date to 1 day sooner each loop, and get its values like day, month, date
		date.setDate(date.getDate() - 1);
		day = date.getDay();
		dateNum = date.getDate();
		month = date.getMonth();
		monthName = monthNames[month];
		dayName = days[day];

		// after each day, reset all activity values
		let totalKmRunning = 0;
		let totalKmCycling = 0;
		let totalKmWalking = 0;
		let totalTimeRunning = 0;
		let totalTimeCycling = 0;
		let totalTimeWalking = 0;

		let runningfinalKm = 0;
		let cyclingfinalKm = 0;
		let walkingfinalKm = 0;
		let runningfinalTime = 0;
		let cyclingfinalTime = 0;
		let walkingfinalTime = 0;

		// save total activity depending on day
		monthActivities.forEach(activity => {
			if(activity.type == "running" && activity.dateNum == dateNum && activity.month == monthName) {
				totalKmRunning += parseFloat(activity.distance);
				totalTimeRunning += activity.activitytime.seconds;
			}
			if(activity.type == "cycling" && activity.dateNum == dateNum && activity.month == monthName ) {
				totalKmCycling += parseFloat(activity.distance);
				totalTimeCycling += activity.activitytime.seconds;
			}
			if(activity.type == "walking" && activity.dateNum == dateNum && activity.month == monthName) {
				totalKmWalking += parseFloat(activity.distance);
				totalTimeWalking += activity.activitytime.seconds;
			}
		})

		// get total time in hours and seconds
		let minutesR = ("0" + (Math.floor(totalTimeRunning / 60) % 60)).slice(-2);
		let hoursR = ("0" + Math.floor(totalTimeRunning / 3600)).slice(-2);
		let minutesC = ("0" + (Math.floor(totalTimeCycling / 60) % 60)).slice(-2);
		let hoursC = ("0" + Math.floor(totalTimeCycling / 3600)).slice(-2);
		let minutesW = ("0" + (Math.floor(totalTimeWalking / 60) % 60)).slice(-2);
		let hoursW = ("0" + Math.floor(totalTimeWalking / 3600)).slice(-2);

		runningfinalTime = hoursR+':'+minutesR;
		cyclingfinalTime = hoursC+':'+minutesC;
		walkingfinalTime = hoursW+':'+minutesW;

		// get rounded total km, else keep the value on 0
		if(totalKmRunning > 0.00) {
			runningfinalKm = Number(totalKmRunning).toFixed(2);
		}
		if(totalKmCycling > 0.00) {
			cyclingfinalKm = Number(totalKmCycling).toFixed(2);
		}
		if(totalKmWalking > 0.00) {
			walkingfinalKm = Number(totalKmWalking).toFixed(2);
		}

		calendar.push({dateNum: dateNum, monthName: monthName, dayName: dayName, runningfinalKm: runningfinalKm, cyclingfinalKm: cyclingfinalKm, walkingfinalKm: walkingfinalKm, runningfinalTime: runningfinalTime, cyclingfinalTime: cyclingfinalTime, walkingfinalTime: walkingfinalTime});
	}

  return (
		<Horisontal>
			{calendar.map((day, key) =>
				<MonthContainer key={day.dateNum} { ...props }>
					<div>
						<p> {day.dateNum} </p>
						<p> {day.dayName} </p>
					</div>
					<div>
						<Bubble diameter={"100px"} hourOrKm={day.runningfinalKm} unit={'km'} icon={'/images/running.png'} />
						<Bubble diameter={"90px"} hourOrKm={day.cyclingfinalKm} unit={'km'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={day.walkingfinalKm} unit={'km'} icon={'/images/walking.png'} />
					</div>
				</MonthContainer>
			)}
		</Horisontal>
  );
};


export default MonthWrapper;
