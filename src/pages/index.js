import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHealth from "./Health";
import PageTimer from "./Timer";
import PageMoves from "./Moves";
// import { NotFound } from "../../errors/404";
import SliderComponent from '../components/SliderComponent'

const Main = (props) => {
	return (
		<Fragment>
			<SliderComponent />
		</Fragment>
	);
};


export const MainPage = (props) => {
	return (
		<BrowserRouter>
			<Fragment>

				<Route
					path="/"
					exact
					render={props => {
						return <Main {...props} />;
					}}
				/>

				<Route
					path="/health"
					render={props => {
						return <PageHealth {...props} />;
					}}
				/>

				<Route
					path="/timer"
					render={props => {
						return <PageTimer {...props} />;
					}}
				/>
				<Route
					path="/moves"
					render={props => {
						return <PageMoves {...props} />;
					}}
				/>
			</Fragment>
		</BrowserRouter>
	);
};
