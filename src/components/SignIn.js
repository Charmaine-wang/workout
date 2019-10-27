
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
import { UserContext } from '../context'
import { withRouter } from "react-router-dom";

const StyledSignIn = styled.form`
	/* height: 100%;
	width: 100%;
	background-color: yellow; */
`;

const SignIn = ( props ) => {

const {userData, setUserData, isLoggedIn, setLoggedIn} =  useContext(UserContext)

	const handleOwnerChange = e => {

				setUserData({
					...userData,
					[e.target.name]: e.target.value
				});
	};

  const handleSubmit = async (email, password) => {
	auth
	.signInWithEmailAndPassword(email, password)
	.then(() => {
				console.log("wooop Loggedin");
				setLoggedIn(true)
		console.log(isLoggedIn);
	})
	.catch(function(error) {

		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode === "auth/wrong-password") {
			alert("Wrong password.");
		} else {
			alert(errorMessage);
		}
		console.log(error);
	});

	};

	return (
		<StyledSignIn {...props} className="SignIn" onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				value={userData.email}
				onChange={handleOwnerChange}
				required
			/>
			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				value={userData.password}
				onChange={handleOwnerChange}
				required
			/>

			<h1
				onClick={e => {
					handleSubmit(userData.email, userData.password);
				}}
			>
				Login
			</h1>
		</StyledSignIn>
	);
};
export default SignIn;

// export default withRouter(SignIn)
