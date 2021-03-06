import React, { useState, useEffect } from 'react';
import {ArrowBack, FadedBackground, MonthWrapper, Bubble} from '../../../../components/';
import firebase from "../../../../firebase";
import { useAuth } from "../../../../authcontext";
import { StyledMoves, MonthSlider, DayWrapper } from './StyledMoves'

const PageMoves = (props) => {
	const [isDay, setIsDay] = useState(false);
	const [activities, setActivities] = useState([]);
	const { authUser, authLoading } = useAuth();
	const [toggleRunning, setToggleRunning] = useState(true);
	const [toggleCycling, setToggleCycling] = useState(true);
	const [toggleWalking, setToggleWalking] = useState(true);
	const [animationR, setAnimationR] = useState(false);
	const [animationC, setAnimationC] = useState(false);
	const [animationW, setAnimationW] = useState(false);

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

	// date today
	let date = new Date();
	let currentDay = date.getDay();
	let currentDate = date.getDate();
	let currentMonth = date.getMonth();
	let monthName = monthNames[currentMonth];
	let dayName = days[currentDay];

	useEffect(() => {
		fetchActivities();
	}, []);

	// get all activities from user
	const fetchActivities = () => {
		firebase
		.firestore()
		.collection("users")
		.doc(authUser.uid)
		.collection("activities")
		.where('dateNum', '==', currentDate)
		.where('month', '==', monthName)
		.get()
		.then(activities => {
			const data = [];
			activities.forEach(doc => {
				data.push({ id: doc.id, ...doc.data() });
			});
			setActivities(data);
		});
	};

	let totalKmRunning = 0;
	let totalKmCycling = 0;
	let totalKmWalking = 0;
	let totalTimeRunning = 0;
	let totalTimeCycling = 0;
	let totalTimeWalking = 0;

	// sum all km and time of each activity
	activities.forEach(activity => {
		if(activity.type == "running") {
			totalKmRunning += parseFloat(activity.distance);
			totalTimeRunning += activity.activitytime.seconds;
		}
		if(activity.type == "cycling") {
			totalKmCycling += parseFloat(activity.distance);
			totalTimeCycling += activity.activitytime.seconds;
		}
		if(activity.type == "walking") {
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


	let runningfinalKm = 0;
	let cyclingfinalKm = 0;
	let walkingfinalKm = 0;

	let runningfinalTime = hoursR+':'+minutesR;
	let cyclingfinalTime = hoursC+':'+minutesC;
	let walkingfinalTime = hoursW+':'+minutesW;

	let bubbleRun = 80;
	let bubbleCyc = 80;
	let bubbleWal = 80;

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




	return (
		<div {...props}>
			<FadedBackground opacity={'0.4'} />
			<ArrowBack />

			<StyledMoves {...props} isDay={isDay}>
				<div>
					<div isWeek={isDay}>
						<p><span> {monthName} </span></p>
					</div>
					<div isWeek={isDay}>
						<p> {dayName} <span> {currentDate} </span></p>
					</div>
				</div>
				<div>
					<div isWeek={isDay} onClick={() => setIsDay(true)}> TODAY </div>
					<div isWeek={isDay} onClick={() => setIsDay(false)}> MONTH </div>
				</div>

				<MonthSlider {...props} flexWeek={isDay} >
					<MonthWrapper />
				</MonthSlider>


				<DayWrapper {...props} flexDay={isDay}>
					<img src="/images/fakemap.png" alt="map" />

					<div>
						<p> Run </p>
						<Bubble
							onClick={() => { setToggleRunning(!toggleRunning); setAnimationR(true); }}
							onAnimationEnd={() => setAnimationR(false)}
							diameter={bubbleRun + "px"}
							hourOrKm={toggleRunning ? runningfinalKm : runningfinalTime}
							unit={toggleRunning ? 'km' : 'hours'}
							animationR={animationR}
						/>
						<img src="/images/running.png" alt="running icon" />
					</div>
					<div>
						<p> Cycle </p>
						<Bubble
							onClick={() => { setToggleCycling(!toggleCycling); setAnimationC(true); }}
							onAnimationEnd={() => setAnimationC(false)}
							diameter={bubbleCyc + "px"}
							hourOrKm={toggleCycling ? cyclingfinalKm : cyclingfinalTime}
							unit={toggleCycling ? 'km' : 'hours'}
							animationC={animationC}
						/>
						<img src="/images/cycling.png" alt="running icon" />
					</div>
					<div>
						<p> Walk </p>
						<Bubble
							onClick={() => { setToggleWalking(!toggleWalking); setAnimationW(true); }}
							onAnimationEnd={() => setAnimationW(false)}
							diameter={bubbleWal + "px"}
							hourOrKm={toggleWalking ? walkingfinalKm : walkingfinalTime}
							unit={toggleWalking ? 'km' : 'hours'}
							animationW={animationW}
						/>
						<img src="/images/walking.png" alt="running icon" />
					</div>
				</DayWrapper>

			</StyledMoves>
		</div>
	);
};

export default PageMoves;
