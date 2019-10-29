import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'
import Button from '../components/Button'

const BgBlackFade = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0, 0.65);
	position: absolute;
`
const StyledSignIn = styled.form`
display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;
	​
	> img {
		width: 100px;
		margin-bottom: 40px;
	}
​
> p {
	font-size: 30px;
	color: white;
	margin-bottom: 10px;
}
​
	> div {
		margin-top: 16px;
		​
		> img {
			width: 20px;
			position: absolute;
			margin: 18px 0 0 14px;
			/* position: absolute; */
		}
		​
		> input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			transition: background-color 5000s ease-in-out 0s;
			-webkit-text-fill-color: #fff !important;
			font-family: 'Barlow';
			font-family: Barlow;
		}
		​
		> input {
			border-radius: 5px;
			width: 320px;
			height: 50px;
			background-color: rgba(255,255,255, 0.15);
	    font-size: 16px;
			color: white;
			padding-left: 50px;
			border: none;
			outline: none;
			-webkit-tap-highlight-color: none;
			​
			&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
				color: white;
			  opacity: 0.7; /* Firefox */
			}
			​
			&::value {
				font-weight: 200;
			}
			​
			&::after, &::before {
				color: white;
			}
		}
	}
	​
	> a {
		color: rgba(255,255,255, 0.8);
		text-decoration: none;
		letter-spacing: 0.3px;
		> span {
			font-weight: 400;
			color: white;
		}
	}
}
`


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
		<div>
		<BgBlackFade />
		<StyledSignIn {...props} className="SignIn" onSubmit={handleSubmit}>
			<img src="images/running.png" alt="Password icon" />
			<p> Login </p>

			<div>
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" required />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" name="password" id="password" required />
			</div>
				<Button
					margin="50px 0 10px 0" btnWidth="320px" fontColor="white" bgColor="rgba(255,255,255, 0.3)" fontSize="20px"
				>
					Login
				</Button>
				<Link to={"/signup"}>No account? <span> Sign up now! </span></Link>
			{/* <button type="submit">Logga in</button> */}
		</StyledSignIn>
		</div>
	);
};
export default SignIn;

