import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import { withRouter } from "react-router-dom";
const StyledSignIn = styled.form`
	height: 100%;
	width: 100%;
	background-color: yellow;
`;

const SignIn = ({ history }) => {
	const [userState, setUserState] = useState({
		email: "",
		password: ""
	});
	// const {isAuth, setAuth} = useContext(UserContext)

	const handleOwnerChange = e => {
		setUserState({
			...userState,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (email, password) => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push("/");
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

		// this.setState({ email: "", password: "" });
	};
	return (
		<StyledSignIn className="SignIn" onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="text"
				name="email"

				id="email"
				value={props.valueEmail}
				// value={userState.email}
				onChange={() => props.oncChange()}
				// onChange={handleOwnerChange}
				required
			/>
			<label htmlFor="password">Password</label>
			<input
				type="text"
				name="password"
				id="password"
				value={props.valuePassword}
				onChange={() => props.oncChangepass()}
				// value={userState.password}
				// onChange={handleOwnerChange}
				required
			/>

			<h1
				onClick={e => {
					handleSubmit(userState.email, userState.password);
				}}
			>
				Login
			</h1>
		</StyledSignIn>
	);
};
// export default SignIn;

export default withRouter(SignIn);
