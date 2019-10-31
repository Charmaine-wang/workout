import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderComponent from '../../../../components/SliderComponent'
import firebase from '../../../../firebase'

const StyledPageHome = styled.div`
	display: flex;
`;

const PageHome = () => {
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<>
			<img src="/images/backgroundFade.png" alt="faded background" />
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
		</>
	);
};

export default PageHome;
