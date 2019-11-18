import React from "react";
import firebase, { firestore } from "../../firebase";
import { Button } from "../index";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../authcontext";
import { StyledSignup } from './StyledSignup'


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
					<input type="text" name="email" id="email" placeholder="Email" />
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
};
export default Signup;
