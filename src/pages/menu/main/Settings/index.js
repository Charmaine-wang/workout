import React from "react";
import firebase, { firestore } from "../../../../firebase";
import {Button, FadedBackground, ArrowBack} from "../../../../components/";
import { useAuth } from "../../../../authcontext";
import { StyledSignup } from './StyledSettings'

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
			<ArrowBack />
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
