import React from "react";
import { useAuth } from "../../authcontext";
import {Button} from "../index";
import firebase from "../../firebase";
import { NavLink } from "react-router-dom";
import { StyledLogin } from "./StyledLogin"

const Login = props => {
	const { authUser, authLoading } = useAuth();

	const handleSubmit = event => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		firebase
			.auth()
			.signInWithEmailAndPassword(
				formData.get("email"),
				formData.get("password")
			)

			.catch(function(error) {
				let errorCode = error.code;
				let errorMessage = error.message;
				if (errorCode === "auth/wrong-password") {
					alert("Wrong password.");
				} else {
					alert(errorMessage);
				}
				console.log(error);
			});
	};

	if (authLoading) {
		return (
			<>
				<StyledLogin>
					<h1>Logging in...</h1>
				</StyledLogin>
			</>
		);
	}

	if (authUser) {
		return (window.location.href = "/");
	}

	return (
		<div>
			<StyledLogin {...props} className="SignIn" onSubmit={handleSubmit}>
				<img src="/images/running.png" alt="Password icon" />
				<p> Login </p>

				<div>
					<img src="/images/email.png" alt="Password icon" />
					<input
						type="text"
						placeholder="Email"
						name="email"
						id="email"
						required
					/>
				</div>

				<div>
					<img src="/images/password.png" alt="Password icon" />
					<input
						type="password"
						placeholder="Password"
						name="password"
						id="password"
						required
					/>
				</div>

				<Button
					type="submit"
					margin="50px 0 10px 0"
					btnWidth="320px"
					fontColor="white"
					bgColor="rgba(255,255,255, 0.3)"
					fontSize="20px"
				>
					Login
				</Button>
				<NavLink to={"/signup"}>
					No account? <span> Sign up now! </span>
				</NavLink>
			</StyledLogin>
		</div>
	);
};
export default Login;
