import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/Globalstyles';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import firebase, { auth, firestore } from "./firebase";
import { collectIdsAndDocs } from './components/Utilities';
import PageMain from './pages/menu/main'
import PageLogin from './pages/menu/Login'
import { UserContext } from "./context";
import PageTimer from './pages/menu/main/Timer'
import PageHealth from "./pages/menu/main/Health";
import PageMoves from "./pages/menu/main/Moves";
import PageSignup from "./pages/menu/Signup";





const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(180deg, #4d0000 0%, rgba(255, 255, 255, 0) 100%),
		#350000;

		& > img {
				position: absolute;
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

  return (
		<StyledApp>
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
							exact
							path="/health"
							component={isLoggedIn ? PageHealth : PageLogin}
						/>
						<Route
							exact
							path="/timer"
							component={isLoggedIn ? PageTimer : PageLogin}
						/>
						<Route
							exact
							path="/moves"
							component={isLoggedIn ? PageMoves : PageLogin}
						/>
						<Route exact path="/signup" component={PageSignup} />
						{/* <Route exact path="/" component={!isLoggedIn ? PageLogin : PageMain} /> */}

						<Route render={() => <h1>404</h1>} />
					</Switch>
				</UserContext.Provider>
				{/* <PageMain /> */}
			</Router>
		</StyledApp>
	);
}

export default App;
