import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'



const StyledSignIn = styled.form`
	/* height: 100%;
	width: 100%;
	background-color: yellow; */
`;

const SignIn = ( props ) => {

  const [user, isLoading] = useAuthState(firebase.auth());

console.log(user);

  const handleSubmit =  (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

    firebase
      .auth()
      .signInWithEmailAndPassword(
        formData.get('email'),
        formData.get('password')
      )

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

  if (isLoading) {
		return <div><h1>LOAD LOAD LOAAAADS</h1></div>;
	}

	if (user) {
		return window.location.href = "/";
	}

	return (
		<StyledSignIn {...props} className="SignIn" onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input type="text" name="email" id="email" required />
			<label htmlFor="password">Password</label>
			<input type="text" name="password" id="password" required />


			<button type="submit">Logga in</button>
		</StyledSignIn>
	);
};
export default SignIn;

