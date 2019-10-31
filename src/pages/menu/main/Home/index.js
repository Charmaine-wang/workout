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
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledPageHome>
			<FadedBackground opacity={'1'} />
			<img src="/images/shoeImage.png" alt="shoes background" />
			<SliderComponent />
			<button
				onClick={() => {
					firebase.auth().signOut();
					window.location.href = "/login";
				}}
			>
				logga ut
			</button>
		</StyledPageHome>
	);
};

export default PageHome;
