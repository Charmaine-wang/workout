import React, { Fragment, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageHealth from "./Health";
import PageTimer from "./Timer";
import PageMoves from "./Moves";
import PageLogin from "../Login";
import PageSignup from "../Signup"
// import { NotFound } from "../../errors/404";
import SliderComponent from '../../../components/SliderComponent'
import { UserContext } from '../../../context'

const PageMain = (props) => {
	const {isLoggedIn} = useContext(UserContext)
	return (
		<Fragment>
			{isLoggedIn && <p>du är inloggad!!</p>}
			<SliderComponent />
		</Fragment>
	);
};


export default PageMain;
