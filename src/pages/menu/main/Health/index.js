import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from "../../../../authcontext";
import firebase, {firestore} from "../../../../firebase";
import {ArrowBack, HealthComponent, BodyComponent, FadedBackground} from '../../../../components/'
import { StyledHealth, HealthWrapper, BMIWrapper, StyledButton } from './StyledHealth'

const PageHealth = () => {
	const { authUser, authLoading } = useAuth();
	const [length, setLength] = useState(null);
	const [weight, setWeight] = useState(null);
	const [saved, isSaved] = useState(false);
	const [activities, setActivities] = useState([]);
	const [state, setState] = useState({
		length: "",
		weight: ""
	});

	const handleChange = (event) => {
		if (!length == "") {
		authUser.length = length
		}
		if (!weight == "") {
			authUser.weight = weight
		}
		event.preventDefault();
		firestore
		.collection("users")
		.doc(authUser.uid)
		.update({
			length: authUser.length,
			weight: authUser.weight
		});
	 }

 	const BMI = Number(
		(authUser.weight / Math.pow(authUser.length, 2)) * 10000
	).toFixed(1);

	useEffect(() => {
		fetchHealth();
	}, [authUser.length, authUser.weight]);


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

	const fetchHealth = () => {
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

	let totalSeconds = 0;
	let totalKm = 0;
	let totalKcal = 0;
	let totalHydr = 8;

	// sum all km and time of each activity
	activities.forEach(activity => {
		totalKm += parseFloat(activity.distance);
		totalSeconds += activity.activitytime.seconds;
		totalKcal += activity.kcal;
	})

	// hydration formula depending on training time (+1 glas every 12 min)
	totalHydr += totalSeconds / 720;
	totalHydr = Math.round(totalHydr);

	// get total time in hours and seconds
	let minutes = ("0" + (Math.floor(totalSeconds / 60) % 60)).slice(-2);
	let hours = ("0" + Math.floor(totalSeconds / 3600)).slice(-2);
	let finalTime = hours+':'+minutes;

	// get rounded total km
	if(totalKm > 0.00) {
		let finalKm = Number(totalKm).toFixed(2);
	}

	return (
		<div>
			<FadedBackground opacity={"0.6"} />
			<ArrowBack />
			<StyledHealth>
				<HealthWrapper>
					<HealthComponent
						title={"Total activity today"}
						firstValue={finalTime + " h"}
						secondValue={totalKm + " km"}
					/>
					<HealthComponent
						title={"Calories burned"}
						secondValue={totalKcal + " kcal"}
					/>
					<HealthComponent
						title={"Rekommended hydration"}
						secondValue={totalHydr + " glases"}
					/>
				</HealthWrapper>

				<div>
					<BodyComponent
						onSubmit={handleChange}
					>
						<StyledButton
							margin="0 0 0 0"
							btnWidth="60px"
							fontColor="white"
							fontSize="18px"
							type="submit"
							onClick={() => isSaved(true)}
							saved={saved}
						>
							{saved ? 'Saved' : 'Save'}
						</StyledButton>

						<div>
							<p>Weight</p>
							<div>
								<input
									onChange={(e) => setWeight(e.target.value)}
									type="text"
									name="weight"
									placeholder={authUser.weight}
									id="weight"
								/>
								<p>kg</p>
							</div>
						</div>
						<div>
							<p>Length</p>
							<div>
								<input
									onChange={(e) => setLength(e.target.value)}
									type="text"
									name="length"
									placeholder={authUser.length}
									id="length"
								/>
								<p>cm</p>
							</div>
						</div>
					</BodyComponent>

					<BMIWrapper>
						<p> BMI </p>
						<p>{BMI} </p>
					</BMIWrapper>
				</div>
			</StyledHealth>
		</div>
	);
};

export default PageHealth;
