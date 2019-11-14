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

const MapIcon = styled.img`
	width: 30px !important;
	height: 30px !important;
	position: absolute;
	right: 16px;
	margin-top: 90px;
`;

const PageMoves = (props) => {
	const [isDay, setIsDay] = useState(false);

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

	// todays date
	let date = new Date();
	let currentDay = date.getDay();
	let currentDate = date.getDate();
	let currentMonth = date.getMonth();
	let monthName = monthNames[currentMonth];
	let dayName = days[currentDay];


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
						<p> {dayName} <span> {currentDay} </span></p>
					</div>
				</div>
				<div>
					<div isWeek={isDay} onClick={() => setIsDay(true)}> DAY </div>
					<div isWeek={isDay} onClick={() => setIsDay(false)}> MONTH </div>
				</div>

				<WeekSlider {...props} flexWeek={isDay} >
					<WeekWrapper />
				</WeekSlider>


				<DayWrapper {...props} flexDay={isDay}>
					<img src="/images/fakemap.png" alt="map" />
					<MapIcon src="/images/location.png" alt="location icon" />

					<div>
						<p> Run </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/running.png" alt="running icon" />
					</div>
					<div>
						<p> Cycle </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/cycling.png" alt="running icon" />
					</div>
					<div>
						<p> Walk </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/walking.png" alt="running icon" />
					</div>
				</DayWrapper>


			</StyledMoves>
		</div>
	);



















	{/*
	return (
		<div {...props}>
			<FadedBackground opacity={'0.4'} />
			<ArrowBack />

			<StyledMoves {...props} isDay={isDay}>

				<div>
					<div isWeek={isDay}>
						<p><span> Oktober </span></p>
					</div>
					<div isWeek={isDay}>
						<p> Wednesday <span> 18 OKT </span></p>
					</div>
				</div>
				<div>
					<div isWeek={isDay} onClick={() => setIsDay(true)}> DAY </div>
					<div isWeek={isDay} onClick={() => setIsDay(false)}> MONTH </div>
				</div>

				<WeekSlider {...props} flexWeek={isDay} >
					<WeekWrapper>
						<div>
							<p> 12 <span> OKT </span> </p>
						</div>
						<div>
							<Bubble diameter={"100px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
							<Bubble diameter={"90px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
							<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
						</div>
					</WeekWrapper>

					<WeekWrapper>
						<div>
							<p> 12 <span> OKT </span> </p>
						</div>
						<div>
							<Bubble diameter={"100px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
							<Bubble diameter={"90px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
							<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
						</div>
					</WeekWrapper>

					<WeekWrapper>
						<div>
							<p> 12 <span> OKT </span> </p>
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
					<MapIcon src="/images/location.png" alt="location icon" />

					<div>
						<p> Run </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/running.png" alt="running icon" />
					</div>
					<div>
						<p> Cycle </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/cycling.png" alt="running icon" />
					</div>
					<div>
						<p> Walk </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} />
						<img src="/images/walking.png" alt="running icon" />
					</div>
				</DayWrapper>


			</StyledMoves>
		</div>
	);

	*/}

};

export default PageMoves;
