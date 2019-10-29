import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/Globalstyles";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "./firebase";
import PageSignup from "./pages/menu/Signup";
import PageLogin from "./pages/menu/Login";
import PageMain from "./pages/menu/main";
import PageTimer from "./pages/menu/main/Timer";
import PageHealth from "./pages/menu/main/Health";
import PageMoves from "./pages/menu/main/Moves";
import PageSettings from "./pages/menu/main/Settings";


const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background-color: black;
	& > img {
		position: absolute;
		height: 100%;
		width: 100%;
	}
	& > img:nth-child(2) {
		opacity: 0.3;
	}
`;

const App = () => {
const [user, isLoading] = useAuthState(firebase.auth());

console.log(user);

	return (
		<StyledApp>
			<GlobalStyle />
			<img src="/images/backgroundFade.png" alt="faded background" />
			<Router>
				<Switch>

					{!user ? (
						<>
							<Redirect to="/login" />
							<Route exact path="/login" component={PageLogin} />
							<Route path="/signup" component={PageSignup} />
						</>
					) : (
						<>
							<Route path="/health" component={PageHealth} />
							<Route path="/timer" component={PageTimer} />
							<Route path="/moves" component={PageMoves} />
							<Route path="/settings" component={PageSettings} />
							<Route path="/" component={PageMain} />

							{/* <Route render={() => <h1>404</h1>} /> */}
						</>
					)}
				</Switch>

				{user ? <Navbar /> : ""}
			</Router>
		</StyledApp>
	);
};

export default App;


