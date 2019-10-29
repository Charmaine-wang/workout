import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { collectIdsAndDocs } from "./Utilities";
import { useAuthState } from "react-firebase-hooks/auth";


const StyledSignup = styled.form`
	height: 100%;
	width: 100%;
	background-color: yellow;
`;

const Signup = (props) => {
	const [user] = useAuthState(firebase.auth());

	const [userState, setUserState] = useState({
		displayName: "",
		email: "",
		password: ""
	});

	const handleOwnerChange = e => {

		setUserState({
			...userState,
			[e.target.name]: e.target.value
		});
	};
// console.log(user);

	const handleSubmit = (email, password, username) => {
		// toggleLoading(true);

		let user;

		console.log(firebase.firestore.collection("users"));
firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				user = firebase.auth().currentUser;
				user.sendEmailVerification();
			})
			.then(() => {
				user.updateProfile({
					username
				});
			})
			.then(() => {
			firebase.firestore.collection("users").add({ email, password, username });
			})
			.catch(function(error) {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log("errorCode", errorCode, "errorMessage", errorMessage);
			});
	};

	if(user){
		return (window.location.href = "/");
	}
	return (
		<StyledSignup>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={userState.username}
				onChange={handleOwnerChange}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				value={userState.email}
				onChange={handleOwnerChange}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				value={userState.password}
				onChange={handleOwnerChange}
			/>

			<input
				type="button"
				value="sign up"
				onClick={() => handleSubmit(userState.email, userState.password, userState.displayName)}
			/>
		</StyledSignup>
	);
};
export default Signup;
