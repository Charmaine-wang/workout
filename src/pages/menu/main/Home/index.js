import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderComponent from '../../../../components/SliderComponent'
import firebase from '../../../../firebase'
import FadedBackground from '../../../../components/FadedBackground'

const StyledPageHome = styled.div`
	> img:nth-child(2) {
		width: 100%;
		height: 100vh;
		opacity: 0.3;
		position: absolute;
	}
	> div {
		padding-top: 34%;
	}
`;

const PageHome = () => {
	const [meters, setMeters] = useState({});


//  const usePosition = () => {
// 	const [position, setPosition] = useState({});

// 	const [error, setError] = useState(null);

// 	const onChange = ({ coords }) => {
// 		setPosition({
// 			latitude: coords.latitude,
// 			longitude: coords.longitude
// 		});
// 		setMeters(position)
// 	};
// 	const onError = error => {
// 		setError(error.message);
// 	};
// 	useEffect(() => {
// 		const geo = navigator.geolocation;
// 		if (!geo) {
// 			setError("Geolocation is not supported");
// 			return;
// 		}
// 		const watcher = geo.watchPosition(onChange, onError);
// 		return () => geo.clearWatch(watcher);
// 	},[]);
// 	return { ...position, error };
// };
// console.log(meters);
// console.log(usePosition());
	return (
		<StyledPageHome>
			<FadedBackground opacity={'1'} />
			<img src="/images/shoeImage.png" alt="shoes background" />
			<SliderComponent />
			<button
				onClick={() => {
					firebase.auth().signOut();
					window.location.href = "/";
				}}
			>
				logga ut
			</button>
		</StyledPageHome>
	);
};

export default PageHome;
