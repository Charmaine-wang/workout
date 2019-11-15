import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context';
import ArrowBack from '../../../../components/ArrowBack';
import FadedBackground from '../../../../components/FadedBackground';
import WeekWrapper from '../../../../components/WeekWrapper';
import Bubble from '../../../../components/Bubble';
import firebase, { firestore } from "../../../../firebase";
import { useAuth } from "../../../../authcontext";

const StyledMoves = styled.div`
	> div:nth-child(1) {
		padding: 18px 20px 40px;
		> div {
			display: flex;
			transition: 0.3s;
			flex-direction: column;
			align-items: flex-end;
			width: 100%;
			&:nth-child(1) {
				height: ${props => props.isDay ? '0px' : '0px'};
				opacity: ${props => props.isDay ? '0' : '1'};
				margin-left: ${props => props.isDay ? '20px' : '0'};
			}
			&:nth-child(2) {
				height: ${props => props.isDay ? '0px' : '0px'};
				opacity: ${props => props.isDay ? '1' : '0'};
				margin-left: ${props => props.isDay ? '0' : '20px'};
			}
			> p {
				color: white;
				font-size: 18px;
				> span {
					font-size: 20px;
				}
			}
		}
	}

	> div:nth-child(2) {
		display: flex;
		flex-direction: row;
		width: 100%;
		color: white;
		> div {
			width: 50%;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			&:nth-child(1) {
				background-color: ${props => props.isDay ? 'rgba(255,255,255, 0.35)' : 'rgba(255,255,255, 0.2)'};
				font-weight: ${props => props.isDay ? '400' : '200'};
				font-size: ${props => props.isDay ? '22px' : '18px'};
				transition: 0.2s;
			}
			&:nth-child(2) {
				background-color: ${props => props.isDay ? 'rgba(255,255,255, 0.2)' : 'rgba(255,255,255, 0.35)'};
				font-weight: ${props => props.isDay ? '200' : '400'};
				font-size: ${props => props.isDay ? '18px' : '22px'};
				transition: 0.2s;
			}
		}
	}
`;

const WeekSlider = styled.div`
	display: ${props => props.flexWeek ? 'none' : 'flex'};
	flex-direction: row;
	overflow-x: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
	}
`;

const DayWrapper = styled.div`
	display: ${props => props.flexDay ? 'flex' : 'none'};
	flex-direction: column;

	> img {
		opacity: 1;
		width: 100%;
		height: 130px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: row;

		background-color: rgba(0,0,0, 0.8);
		margin-bottom: 2px;
		width: 100%;
		height: calc((100vh - 58px - 48px - 130px - 54px) / 3);

		> p {
			font-size: 22px;
			color: white;
			opacity: 0.8;
			width: 44px;
		}

		> img {
			width: 40px;
			opacity: 0.3;
		}
	}
`;

const PageMoves = (props) => {
	const [isDay, setIsDay] = useState(false);
	const [activities, setActivities] = useState([]);
	const [monthActivities, setMonthActivities] = useState([]);
	const { authUser, authLoading } = useAuth();
	const [toggleRunning, setToggleRunning] = useState(true);
	const [toggleCycling, setToggleCycling] = useState(true);
	const [toggleWalking, setToggleWalking] = useState(true);

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
		fetchMonthActivities();
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
	let hoursR = ("0" + Math.floor(minutesR / 360)).slice(-2);

	let minutesC = ("0" + (Math.floor(totalTimeCycling / 60) % 60)).slice(-2);
	let hoursC = ("0" + Math.floor(minutesC / 360)).slice(-2);

	let minutesW = ("0" + (Math.floor(totalTimeWalking / 60) % 60)).slice(-2);
	let hoursW = ("0" + Math.floor(minutesW / 360)).slice(-2);


	let runningfinalKm = 0;
	let cyclingfinalKm = 0;
	let walkingfinalKm = 0;

	let runningfinalTime = hoursR+':'+minutesR;
	let cyclingfinalTime = hoursC+':'+minutesC;
	let walkingfinalTime = hoursW+':'+minutesW;

	// get rounded total km
	if(totalKmRunning > 0.00) {
		runningfinalKm = Number(totalKmRunning).toFixed(2);
	}
	if(totalKmCycling > 0.00) {
		cyclingfinalKm = Number(totalKmCycling).toFixed(2);
	}
	if(totalKmWalking > 0.00) {
		walkingfinalKm = Number(totalKmWalking).toFixed(2);
	}


	let dayToMonth;
	let dateToMonth;
	let monthToMonth;
	let monthNameToMonth;
	let dayNameToMonth;

	// get last 30 days (excluding today)
	date.setDate(date.getDate() + 1);
	for(let i = 0; i < 30; i++) {
		date.setDate(date.getDate() - 1);

		dayToMonth = date.getDay();
		dateToMonth = date.getDate();
		monthToMonth = date.getMonth();

		monthNameToMonth = monthNames[monthToMonth];
		dayNameToMonth = days[currentDay];

		console.log(date)
		console.log(dateToMonth)
		console.log(monthNameToMonth)
		console.log(dayNameToMonth)
		console.log("----")
	};

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

				<WeekSlider {...props} flexWeek={isDay} >
					<WeekWrapper>
						<div>
							<p> {dateToMonth} <span> {dayNameToMonth} </span> </p>
						</div>
						<div>
							<Bubble diameter={"100px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
							<Bubble diameter={"90px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
							<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
						</div>
					</WeekWrapper>
				</WeekSlider>


				<DayWrapper {...props} flexDay={isDay}>
					<img src="/images/fakemap.png" alt="map" />

					<div>
						<p> Run </p>
						<Bubble onClick={() => setToggleRunning(!toggleRunning)} diameter={"90px"} hourOrKm={toggleRunning ? runningfinalKm : runningfinalTime} unit={toggleRunning ? 'km' : 'hours'} />
						<img src="/images/running.png" alt="running icon" />
					</div>
					<div>
						<p> Cycle </p>
						<Bubble onClick={() => setToggleCycling(!toggleCycling)} diameter={"90px"} hourOrKm={toggleCycling ? cyclingfinalKm : cyclingfinalTime} unit={toggleCycling ? 'km' : 'hours'} />
						<img src="/images/cycling.png" alt="running icon" />
					</div>
					<div>
						<p> Walk </p>
						<Bubble onClick={() => setToggleWalking(!toggleWalking)} diameter={"90px"} hourOrKm={toggleWalking ? walkingfinalKm : walkingfinalTime} unit={toggleWalking ? 'km' : 'hours'} />
						<img src="/images/walking.png" alt="running icon" />
					</div>
				</DayWrapper>

			</StyledMoves>
		</div>
	);
};

export default PageMoves;
