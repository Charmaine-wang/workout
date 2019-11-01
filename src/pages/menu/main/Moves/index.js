import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context';
import TopIcons from '../../../../components/TopIcons';
import FadedBackground from '../../../../components/FadedBackground';
import WeekWrapper from '../../../../components/WeekWrapper';
import Bubble from '../../../../components/Bubble';


navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

let options = {
  enableHighAccuracy: true,
  timeout: 100000,
  maximumAge: 0
};

let success = (position) => {
  console.log(`Latitude : ${position.coords.latitude}`);
  console.log(`Longitude: ${position.coords.longitude}`);
	console.log(`Speed: ${position.coords.speed}`);
	console.log(`More or less ${position.coords.accuracy} meters.`);
  // console.log(`More or less ${position.coords.accuracy} meters.`);
}

let error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

// STOPS WATCH
// navigator.geolocation.clearWatch(watchID);



const StyledMoves = styled.div`
	> div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 100%;
		padding: 60px 20px 20px;
		> p {
			color: white;
			&:nth-child(1) {
				font-size: 18px;
			}
			&:nth-child(2) {
				font-size: 22px;
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
			height: 50px;
			background-color: rgba(255,255,255, 0.25);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 18px;
			/* font-size: 22px; */
			/* font-weight: 500; */
		}
	}
`;

const WeekSlider = styled.div`
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
	}
`;

const DayWrapper = styled.div`
	display: flex;
	flex-direction: column;

	> img {
		opacity: 0.8;
		width: 100%;
		height: 138px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: row;

		background-color: rgba(0,0,0, 0.8);
		margin-bottom: 2px;
		width: 100%;
		height: calc((100vh - 128px - 50px - 138px - 54px) / 3);

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
	margin-top: 96px;
`;


const PageMoves = () => {
	useEffect(() => {
		// console.log("mounted");
	}, []);

	return (
		<div>
			<FadedBackground opacity={'0.4'} />
			<TopIcons iconSrc='/images/moves.png'/>

			<StyledMoves>
				<div>
					<p> Week </p>
					<p> 42 </p>
				</div>
				<div>
					<div> DAY </div> { /* Onclick här */}
					<div> WEEK </div> { /* Onclick här */}
				</div>


				{ /* Foreach här med varje datum, km/h, unit osv per dag */}
				{ /* BORTKOMMENTERA FÖR WEEK
				<WeekSlider>

					<WeekWrapper>
						<div>
							<p> 12 </p>
							<p> OKT </p>
						</div>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<Bubble diameter={"100px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
					</WeekWrapper>

					<WeekWrapper>
						<div>
							<p> 12 </p>
							<p> OKT </p>
						</div>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<Bubble diameter={"100px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
					</WeekWrapper>

					<WeekWrapper>
						<div>
							<p> 12 </p>
							<p> OKT </p>
						</div>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<Bubble diameter={"100px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
					</WeekWrapper>

					<WeekWrapper>
						<div>
							<p> 12 </p>
							<p> OKT </p>
						</div>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<Bubble diameter={"100px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/cycling.png'} />
						<Bubble diameter={"80px"} hourOrKm={'0:35'} unit={'hours'} icon={'/images/walking.png'} />
					</WeekWrapper>

				</WeekSlider>
			 */ }

				<DayWrapper>
					<img src="/images/fakemap.png" alt="map" />
					<MapIcon src="/images/location.png" alt="location icon" />

					<div>
						<p> Run </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/running.png'} />
						<img src="/images/running.png" alt="running icon" />
					</div>

					<div>
						<p> Cycle </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/cycling.png'} />
						<img src="/images/cycling.png" alt="running icon" />
					</div>

					<div>
						<p> Walk </p>
						<Bubble diameter={"90px"} hourOrKm={'0:45'} unit={'hours'} icon={'/images/walking.png'} />
						<img src="/images/walking.png" alt="running icon" />
					</div>

				</DayWrapper>


			</StyledMoves>
		</div>
	);
};

export default PageMoves;
