import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import firebase, { firestore } from "../../../../firebase";
import Button from "../../../../components/Button";
import { useAuth } from "../../../../authcontext";
import FadedBackground from "../../../../components/FadedBackground";
import TopIcons from "../../../../components/TopIcons";

const StyledSignup = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 80px 0 100px 0;
	align-items: center;
	width: 100%;
	height: 100vh;

	> div > div {
		margin-top: 16px;
		> p {
			position: absolute;
			color: rgba(255, 255, 255, 0.4);
			padding-left: 3%;
			padding-top: 2%;
			font-size: 16px;
		}
		> img {
			opacity: 0.3;
			position: absolute;
			width: 30px;
			height: 30px;
			right: 0;
			padding-top: 2%;
			padding-right: 3%;
		}

		> input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			transition: background-color 5000s ease-in-out 0s;
			-webkit-text-fill-color: #fff !important;
			font-family: "Barlow";
			font-family: Barlow;
		}

		> input {
			border-radius: 5px;
			width: 320px;
			height: 60px;
			background-color: rgba(255, 255, 255, 0.15);
			font-size: 18px;
			color: white;
			padding-top: 7%;
			padding-left: 3%;
			border: none;
			outline: none;
			-webkit-tap-highlight-color: none;

			&::after,
			&::before {
				color: white;
			}
		}
	}
`;

const Signup = props => {
	const { authUser } = useAuth();

	const handleSubmit = event => {
		event.preventDefault();
		let userData = new FormData(event.currentTarget);

		firebase
			.auth()
			.createUserWithEmailAndPassword(
				userData.get("email"),
				userData.get("password")
			)
			.then(res => {
				firestore
					.collection("users")
					.doc(res.user.uid)
					.set({
						displayName: userData.get("displayName"),
						email: userData.get("email"),
						password: userData.get("password")
					});
			})
			.catch(function(error) {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log("errorCode", errorCode, "errorMessage", errorMessage);
			});
	};



	return (
		<div>
			<FadedBackground opacity="0.3" />
			<TopIcons iconSrc="/images/settings.png" />
			<StyledSignup {...props} className="SignIn" onSubmit={handleSubmit}>
				<div>
					<div>
						<p>Name</p>
						<img src="/images/edit.png" alt="edit" />
						<input
							type="text"
							name="displayName"
							id="displayName"
							// placeholder="Name"
						/>
					</div>

					<div>
						<p>Email</p>
						<img src="/images/edit.png" alt="edit" />
						<input
							type="text"
							name="email"
							id="email"
							// placeholder="Email"
						/>
					</div>

					<div>
						<p>Password</p>
						<img src="/images/edit.png" alt="edit" />
						<input
							type="password"
							name="password"
							id="password"
							// placeholder="Password"
						/>
					</div>
				</div>
				<div>
					<Button onClick={() => {
						firebase.auth().signOut();
							window.location.href = "/";
						}}
						margin="10px 0 10px 0"
						btnWidth="320px"
						fontColor="white"
						bgColor="rgba(255,255,255, 0.25)"
						fontSize="20px"
						type="submit"
					>
						Logout
					</Button>

					<Button
						margin="10px 0 10px 0"
						btnWidth="320px"
						fontColor="white"
						bgColor="rgba(255,255,255, 0.15)"
						fontSize="20px"
						type="submit"
					>
						Delete Account
					</Button>
				</div>
			</StyledSignup>
		</div>
	);
};
export default Signup;
