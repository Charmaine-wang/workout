import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context';
import TopIcons from '../../../../components/TopIcons';

const StyledMoves = styled.div`

`;

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


const PageMoves = () => {
	useEffect(() => {
		// console.log("mounted");
	}, []);

	return (
		<StyledMoves>
			<TopIcons iconSrc='images/moves.png'/>

			<h1>Moves</h1>
		</StyledMoves>
	);
};

export default PageMoves;
