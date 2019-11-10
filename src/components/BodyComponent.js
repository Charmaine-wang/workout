import React, { useState, useEffect } from 'react';
import Button from '../components/Button'
import firebase, {firestore} from '../firebase'
import styled from 'styled-components';
import { useAuth } from "../authcontext";

const StyledBodyInfo = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	> div {
		width: 50vw;
		height: 20vh;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		padding: 8px 32px;
		> p {
			font-size: 22px;
			opacity: 0.7;
			color: white;
			padding: 8px 0px 3vh;
		}
		> div {
			display: flex;
			flex-direction: row;
			> button {
				background-color: red;
			}

			> p {
				font-size: 36px;
				color: white;
				padding: 1.5vh 10px;
			}
			> input {
				font-size: 36px;
				color: white;
				width: 84px;
				height: 70px;
				background-color: rgba(255, 255, 255, 0.12);
				padding: 1vh 10px;
				border: none;
			}

			> p:first-child {
				padding: 1vh 8px;
			}
		}
	}
`;

const BodyComponent = (props) => {
const { authUser, authLoading } = useAuth();
	// const handleChange = event => {
	// 	event.preventDefault();
	// 	const userData = new FormData(event.currentTarget);
	// 	console.log(userData.weight);
	// 	firestore
	// 		.collection("users")
	// 		.doc(authUser.uid)
	// 		.update({
	// 			weight: userData.get("weight"),
	// 			length: userData.get("length")
	// 			// weight: 0,
	// 			// length: 0
	// 		});
	// };
	return (
		<StyledBodyInfo {...props} onSubmit={props.onSubmit}>
			<div>
				<p>Weight</p>
				<div {...props}>
					<input
						type="text"
						name="weight"
						placeholder={authUser.weight}
						id="weight"
						//value={"" ? authUser.weight : authUser.weight}
					/>
					<p>kg</p>
				</div>
			</div>

			<div>
				<p>Length</p>
				<div {...props}>
					<input
						type="text"
						name="length"
						placeholder={authUser.length}
						id="length"
						//value={authUser.length}
					/>
					<p>cm</p>
				</div>
			</div>

			<Button
				margin="50px 0 10px 0"
				btnWidth="320px"
				fontColor="white"
				bgColor="rgba(255,255,255, 0.3)"
				fontSize="20px"
				type="submit"
			>
				Change
			</Button>
		</StyledBodyInfo>
	);
};

export default BodyComponent;
