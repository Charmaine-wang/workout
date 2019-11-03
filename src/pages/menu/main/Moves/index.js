import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context';
import TopIcons from '../../../../components/TopIcons';
import FadedBackground from '../../../../components/FadedBackground';
import WeekWrapper from '../../../../components/WeekWrapper';
import Bubble from '../../../../components/Bubble';


// STOPS WATCH
// navigator.geolocation.clearWatch(watchID);

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

window.onload = () => {
	let startPos;
	navigator.geolocation.watchPosition((position) => {
		startPos = position;
		let finalDistance = calculateDistance(startPos.coords.latitude, startPos.coords.longitude,
    position.coords.latitude, position.coords.longitude);
		console.log(finalDistance)
	});
};


const StyledMoves = styled.div`
	> div:nth-child(1) {
		padding: 60px 20px 38px;
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
		opacity: 0.8;
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
		height: calc((100vh - 98px - 48px - 130px - 54px) / 3);

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

// just a test to see walked distance
const TestKMWalked = styled.p`
	color: white;
	position: absolute;
	margin-top: 50px;
`;


const PageMoves = (props) => {
	useEffect(() => {
		// console.log("mounted");
	}, []);
	const [isDay, setIsDay] = useState(false);

	return (
		<div {...props}>
			<FadedBackground opacity={'0.4'} />
			<TopIcons iconSrc='/images/moves.png'/>
			<TestKMWalked> total meters here </TestKMWalked>

			<StyledMoves {...props} isDay={isDay}>

				<div>
					<div isWeek={isDay}>
						<p> Week <span> 42 </span></p>
					</div>
					<div isWeek={isDay}>
						<p> Wednesday <span> 18 OKT </span></p>
					</div>
				</div>

				<div>
					<div isWeek={isDay} onClick={() => setIsDay(true)}> DAY </div>
					<div isWeek={isDay} onClick={() => setIsDay(false)}> WEEK </div>
				</div>

				{ /* Foreach här med varje datum, km/h, unit osv per dag */}

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
};

export default PageMoves;
