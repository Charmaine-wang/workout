import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/Globalstyles';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import firebase, { auth, firestore } from "./firebase";
import { collectIdsAndDocs } from './components/Utilities';
import { UserContext } from "./context";
import PageSignup from "./pages/menu/Signup";
import PageLogin from './pages/menu/Login'

import PageMain from './pages/menu/main'
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


const history = createBrowserHistory();
const App = (props) => {
	// const {isAuth} = useContext(UserContext)
	const [userData, setUserData] = useState({});
		const [isLoggedIn, setLoggedIn] = useState(false);


	// const getUser = async () => {
	// 		const snapshot = await firestore.collection("users").get();

	// 		const users = snapshot.docs.map(collectIdsAndDocs)
	// 		setUser(users);
	// };

useEffect(() => {
		// if (localStorage.getItem('user')) {
		// 	// CHECK AUTH FROM getItem.token
		// 	setLoggedIn(true)
		// }

		console.log(isLoggedIn);
	// getUser();

}, [isLoggedIn]);
// console.log(isUser);

	const toggleLogIn = () => {
	// 	if (loggedIn) {
	// 		localStorage.removeItem("user");
	// 	}

	// 	setLoggedIn(!loggedIn);
	// };
	}

	// !!!!!!!!! byt PageMain/PageHealth till PageLogin eller tvärtom medan login inte har cookie för att se sidorna

  return (
		<StyledApp>
			<GlobalStyle />
			<img src="/images/backgroundFade.png" alt="faded background" />
			<Router history={history}>
				<UserContext.Provider
					value={{ userData, setUserData, isLoggedIn, setLoggedIn }}
				>
					<Switch>
						<Route
							exact
							path="/"
							component={isLoggedIn ? PageMain : PageLogin}
						/>
						<Route
							path="/health"
							component={isLoggedIn ? PageHealth : PageLogin}
						/>
						<Route
							path="/timer"
							component={isLoggedIn ? PageTimer : PageLogin}
						/>
						<Route
							path="/moves"
							component={isLoggedIn ? PageMoves : PageLogin}
						/>
						<Route
							path="/settings"
							component={isLoggedIn ? PageSettings : PageLogin}
						/>
						<Route path="/signup" component={PageSignup} />
						{/* <Route exact path="/" component={!isLoggedIn ? PageLogin : PageMain} /> */}

						<Route render={() => <h1>404</h1>} />
					</Switch>
				</UserContext.Provider>
				{/* <PageMain /> */}

				{isLoggedIn ? <Navbar /> : ""}
			</Router>
		</StyledApp>
	);
}

export default App;
