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
	margin-right: 2px;
	overflow: hidden;

	> div {
		margin: 20px 0 0;
		/* display: flex;
		fle-
		justify-content: center; */
		> p {
			text-align: center;
			color: white;
			font-size: 20px;
		}
		> p:nth-child(2) {
			font-size: 15px;
			font-weight: 200;
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


	// nu får jag de senaste 30 dagarna, det är bara att koppla databasen kvar
	let date = new Date();
	let day;
	let dateNum;
	let month;
	let monthName;
	let dayName;
	let calendar = [];

	date.setDate(date.getDate() + 1);

	for(let i = 0; i < 30; i++) {
		date.setDate(date.getDate() - 1);
		day = date.getDay();
		dateNum = date.getDate();
		month = date.getMonth();
		monthName = monthNames[month];
		dayName = days[day];

		calendar.push({dateNum: dateNum, monthName: monthName, dayName: dayName});
	}

  return (
		<Horisontal>
			{calendar.map((day) =>
				<MonthContainer { ...props }>
					<div>
						<p> {day.dateNum} </p>
						<p> {day.dayName} </p>
					</div>
					<div>
						<Bubble diameter={"100px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<Bubble diameter={"90px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
					</div>
				</MonthContainer>
			)}
		</Horisontal>
  );
};


export default MonthWrapper;
