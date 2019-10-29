import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
import { UserContext } from '../context'
import { withRouter } from "react-router-dom";
import Button from './Button';

const BgBlackFade = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0, 0.65);
	position: absolute;
`;

const StyledSignIn = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;

	> img {
		width: 100px;
		margin-bottom: 40px;
	}

	> p {
		font-size: 30px;
		color: white;
		margin-bottom: 10px;
	}

	> div {
		margin-top: 16px;

		> img {
			width: 20px;
			position: absolute;
			margin: 18px 0 0 14px;
			/* position: absolute; */
		}

		> input:-webkit-autofill,
			input:-webkit-autofill:hover,
			input:-webkit-autofill:focus,
			input:-webkit-autofill:active {
		    transition: background-color 5000s ease-in-out 0s;
		    -webkit-text-fill-color: #fff !important;
				font-family: 'Barlow';
				font-family: Barlow;
		}

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

			&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
				color: white;
			  opacity: 0.7; /* Firefox */
			}

			&::value {
				font-weight: 200;
			}

			&::after, &::before {
				color: white;
			}
		}
	}

	> a {
		color: rgba(255,255,255, 0.8);
		text-decoration: none;
		letter-spacing: 0.3px;
		> span {
			font-weight: 400;
			color: white;
		}
	}
}`;

const SignIn = ( props ) => {
const {userData, setUserData, isLoggedIn, setLoggedIn} =  useContext(UserContext)

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
		<div>
			<BgBlackFade />
			<StyledSignIn {...props} className="SignIn" onSubmit={handleSubmit}>
				<img src="images/running.png" alt="Password icon" />
				<p> Sign In </p>

				<div>
					<img src="images/email.png" alt="Password icon" />
					<input
						type="text"
						name="email"
						id="email"
						value={userData.email}
						onChange={e => e.target.value}
						placeholder="Email"
						required
					/>
				</div>

				<div>
					<img src="images/password.png" alt="Password icon" />
					<input
						type="password"
						name="password"
						id="password"
						value={userData.password}
						onChange={e => e.target.value}
						placeholder="Password"
						required
					/>
				</div>

				<Button
					margin="50px 0 10px 0" btnWidth="320px" fontColor="white" bgColor="rgba(255,255,255, 0.3)" fontSize="20px"
					onClick={e => {
						handleSubmit(userData.email, userData.password);
					}}
				>
					Sign In
				</Button>
				<Link to={"/signup"}>No account? <span> Sign up now! </span></Link>
			</StyledSignIn>
		</div>
	);
};
export default SignIn;

// export default withRouter(SignIn)