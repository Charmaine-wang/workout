import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {Navbar} from "./components/";
import GlobalStyle from "./styles/Globalstyles";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
import firebase, {firestore} from "./firebase";
import PageSignup from "./pages/menu/Signup";
import PageLogin from "./pages/menu/Login";
import PageHome from "./pages/menu/main/Home";
import PageTimer from "./pages/menu/main/Timer";
import PageHealth from "./pages/menu/main/Health";
import PageMoves from "./pages/menu/main/Moves";
import PageSettings from "./pages/menu/main/Settings";
// import Layout from "./components/Layout";
import { collectIdsAndDocs } from "./components/Utilities";
import { useAuth } from "./authcontext";



const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background-color: black;
`;

const App = () => {
const {authUser, authLoading} = useAuth();
// console.log(authUser);

	return (
		<StyledApp>
			<GlobalStyle />
			<Router>
				<Switch>
					{!authUser ? (
						<>
							{/* <Redirect to="/login" /> */}
							<Route exact="true" path="/" component={PageLogin} />
							<Route path="/signup" component={PageSignup} />
						</>
					) : (
						<>
							<Route exact="true" path="/" component={PageHome} />
							<Route path="/health" component={PageHealth} />
							<Route exact="true" path="/timer" component={PageTimer} />
							<Route path="/moves" component={PageMoves} />
							<Route path="/settings" component={PageSettings} />

							{/* <Route render={() => <h1>404</h1>} /> */}
						</>
					)}
				</Switch>

				{authUser ? <Navbar /> : ""}
			</Router>
			{/* <Layout /> */}
		</StyledApp>
	);
};

export default App;
