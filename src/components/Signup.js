import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import firebase, {firestore} from "../firebase";
import Button from './Button';
import { NavLink } from 'react-router-dom'
import { useAuth } from "../authcontext";

const StyledSignup = styled.form`
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

}`

const Signup = (props) => {
	const {authUser} = useAuth()

	const handleSubmit = (event) => {
		event.preventDefault();
		let userData = new FormData(event.currentTarget);

		firebase
		.auth()
		.createUserWithEmailAndPassword(
			userData.get("email"),
			userData.get("password")
		)
		.then((res) => {
			firestore
			.collection("users")
			.doc(res.user.uid)
			.set({
				displayName: userData.get("displayName"),
				email: userData.get("email"),
				password: userData.get("password"),
				weight: 0,
				length: 0
			});
		})
		.catch(function(error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log("errorCode", errorCode, "errorMessage", errorMessage);
		});
	};

	if (authUser) {
		return (window.location.href = "/");
	}

	return (
		<div>
			<StyledSignup {...props} className="SignIn" onSubmit={handleSubmit}>
				<img src="/images/running.png" alt="Password icon" />
				<p> Sign Up </p>

				<div>
					<img src="/images/running.png" alt="Password icon" />
					<input
						type="text"
						name="displayName"
						id="displayName"
						placeholder="Name"
						required
					/>
				</div>

				<div>
					<img src="/images/email.png" alt="Password icon" />
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email"

					/>
				</div>

				<div>
					<img src="/images/password.png" alt="Password icon" />
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"

					/>
				</div>

				<Button
					margin="50px 0 10px 0"
					btnWidth="320px"
					fontColor="white"
					bgColor="rgba(255,255,255, 0.3)"
					fontSize="20px"
					type="submit"
					>
					Sign Up
				</Button>
				<NavLink exact to={"/"}>
					Already have an account? <span> Login! </span>
				</NavLink>
			</StyledSignup>
		</div>

	);
}
export default Signup;
