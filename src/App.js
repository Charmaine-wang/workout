import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/Globalstyles";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "./firebase";

import { collectIdsAndDocs } from "./components/Utilities";
import { UserContext } from "./context";
import PageSignup from "./pages/menu/Signup";
import PageLogin from "./pages/menu/main/Login";

import PageMain from "./pages/menu/main";
import PageTimer from "./pages/menu/main/Timer";
import PageHealth from "./pages/menu/main/Health";
import PageMoves from "./pages/menu/main/Moves";
import PageSettings from "./pages/menu/main/Settings";
import { log } from "util";

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

// const history = createBrowserHistory();
const App = () => {
const [user, isLoading] = useAuthState(firebase.auth());
	// const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  if (isLoading) {
		return <div><h1>LADDA LADDA LADDA</h1></div>;
	}
//
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

				<Navbar />
			</Router>
		</StyledApp>
	);
};

export default App;

// import React, {useState, useEffect, useContext} from 'react';
// import styled from 'styled-components'
// import Navbar from './components/Navbar'
// import GlobalStyle from './styles/Globalstyles';
// import { Router, Route, Switch } from 'react-router-dom'
// import { createBrowserHistory } from "history";

// import firebase, { auth, firestore } from "./firebase";
// import { collectIdsAndDocs } from './components/Utilities';
// import { UserContext } from "./context";
// import PageSignup from "./pages/menu/Signup";
// import PageLogin from './pages/menu/Login'

// import PageMain from './pages/menu/main'
// import PageTimer from "./pages/menu/main/Timer";
// import PageHealth from "./pages/menu/main/Health";
// import PageMoves from "./pages/menu/main/Moves";
// import PageSettings from "./pages/menu/main/Settings";



// const StyledApp = styled.div`
// 	height: 100vh;
// 	width: 100%;
// 	background-color: black;
// 	& > img {
// 		position: absolute;
// 		height: 100%;
// 		width: 100%;
// 	}
// 	& > img:nth-child(2) {
// 		opacity: 0.3;
// 	}
// `;


// const history = createBrowserHistory();
// const App = (props) => {
// 	// const {isAuth} = useContext(UserContext)
// 	const [userData, setUserData] = useState({});
// 		const [isLoggedIn, setLoggedIn] = useState(false);


// 	// const getUser = async () => {
// 	// 		const snapshot = await firestore.collection("users").get();

// 	// 		const users = snapshot.docs.map(collectIdsAndDocs)
// 	// 		setUser(users);
// 	// };

// useEffect(() => {
// 		// if (localStorage.getItem('user')) {
// 		// 	// CHECK AUTH FROM getItem.token
// 		// 	setLoggedIn(true)
// 		// }

// 		console.log(isLoggedIn);
// 	// getUser();

// }, [isLoggedIn]);
// // console.log(isUser);

// 	const toggleLogIn = () => {
// 	// 	if (loggedIn) {
// 	// 		localStorage.removeItem("user");
// 	// 	}

// 	// 	setLoggedIn(!loggedIn);
// 	// };
// 	}

// 	// !!!!!!!!! byt PageMain/PageHealth till PageLogin eller tvärtom medan login inte har cookie för att se sidorna

//   return (
// 		<StyledApp>
// 			<GlobalStyle />
// 			<img src="/images/backgroundFade.png" alt="faded background" />
// 			<Router history={history}>
// 				<UserContext.Provider
// 					value={{ userData, setUserData, isLoggedIn, setLoggedIn }}
// 				>
// 					<Switch>
// 						<Route
// 							exact
// 							path="/"
// 							component={isLoggedIn ? PageMain : PageLogin}
// 						/>
// 						<Route
// 							exact
// 							path="/health"
// 							component={isLoggedIn ? PageHealth : PageLogin}
// 						/>
// 						<Route
// 							exact
// 							path="/timer"
// 							component={isLoggedIn ? PageTimer : PageLogin}
// 						/>
// 						<Route
// 							exact
// 							path="/moves"
// 							component={isLoggedIn ? PageMoves : PageLogin}
// 						/>
// 						<Route
// 							exact
// 							path="/settings"
// 							component={isLoggedIn ? PageSettings : PageLogin}
// 						/>
// 						<Route exact path="/signup" component={PageSignup} />
// 						{/* <Route exact path="/" component={!isLoggedIn ? PageLogin : PageMain} /> */}

// 						<Route render={() => <h1>404</h1>} />
// 					</Switch>
// 				</UserContext.Provider>
// 				{/* <PageMain /> */}

// 				<Navbar />
// 			</Router>
// 		</StyledApp>
// 	);
// }

// export default App;
