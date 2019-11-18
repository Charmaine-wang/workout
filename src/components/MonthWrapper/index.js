import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useAuth } from "../../authcontext";
import { MonthContainer } from "../index";
import { Horisontal } from './StyledMonthWrapper'



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
		"Saturday"
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

	for (let i = 0; i < 30; i++) {
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
			if (
				activity.type == "running" &&
				activity.dateNum == dateNum &&
				activity.month == monthName
			) {
				totalKmRunning += parseFloat(activity.distance);
				totalTimeRunning += activity.activitytime.seconds;
			}
			if (
				activity.type == "cycling" &&
				activity.dateNum == dateNum &&
				activity.month == monthName
			) {
				totalKmCycling += parseFloat(activity.distance);
				totalTimeCycling += activity.activitytime.seconds;
			}
			if (
				activity.type == "walking" &&
				activity.dateNum == dateNum &&
				activity.month == monthName
			) {
				totalKmWalking += parseFloat(activity.distance);
				totalTimeWalking += activity.activitytime.seconds;
			}
		});

		// get total time in hours and seconds
		let minutesR = ("0" + (Math.floor(totalTimeRunning / 60) % 60)).slice(-2);
		let hoursR = ("0" + Math.floor(totalTimeRunning / 3600)).slice(-2);
		let minutesC = ("0" + (Math.floor(totalTimeCycling / 60) % 60)).slice(-2);
		let hoursC = ("0" + Math.floor(totalTimeCycling / 3600)).slice(-2);
		let minutesW = ("0" + (Math.floor(totalTimeWalking / 60) % 60)).slice(-2);
		let hoursW = ("0" + Math.floor(totalTimeWalking / 3600)).slice(-2);

		runningfinalTime = hoursR + ":" + minutesR;
		cyclingfinalTime = hoursC + ":" + minutesC;
		walkingfinalTime = hoursW + ":" + minutesW;

		let bubbleRun = 70;
		let bubbleCyc = 70;
		let bubbleWal = 70;

		// get rounded total km, else keep the value on 0
		if(totalKmRunning > 0.00) {
			runningfinalKm = Number(totalKmRunning).toFixed(2);
			bubbleRun += Math.round(runningfinalKm * 4);
		}
		if(totalKmCycling > 0.00) {
			cyclingfinalKm = Number(totalKmCycling).toFixed(2);
			bubbleCyc += Math.round(cyclingfinalKm * 4);
		}
		if(totalKmWalking > 0.00) {
			walkingfinalKm = Number(totalKmWalking).toFixed(2);
			bubbleWal += Math.round(walkingfinalKm * 4);
		}

		calendar.push({
			dateNum: dateNum,
			monthName: monthName,
			dayName: dayName,
			runningfinalKm: runningfinalKm,
			cyclingfinalKm: cyclingfinalKm,
			walkingfinalKm: walkingfinalKm,
			runningfinalTime: runningfinalTime,
			cyclingfinalTime: cyclingfinalTime,
			walkingfinalTime: walkingfinalTime,
			bubbleRun: bubbleRun,
			bubbleCyc: bubbleCyc,
			bubbleWal: bubbleWal
		});

		console.log(calendar)
	}

	return (
		<Horisontal>
			{calendar.map((day, key) => (
				<MonthContainer
					key={day.dateNum}
					dateDay={day.dateNum}
					dateName={day.dayName}
					kmRunning={day.runningfinalKm}
					hourRunning={day.runningfinalTime}
					diameterRun={day.bubbleRun + "px"}
					kmCycling={day.cyclingfinalKm}
					hourCycling={day.cyclingfinalTime}
					diameterCyc={day.bubbleCyc + "px"}
					kmWalking={day.walkingfinalKm}
					hourWalking={day.walkingfinalTime}
					diameterWal={day.bubbleWal + "px"}
				/>
			))}
		</Horisontal>
	);
};

export default MonthWrapper;
