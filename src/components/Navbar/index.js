import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from './StyledNavbar'

const Navbar = () => {
	return (
		<StyledNavbar>
			<NavLink exact="true" to={"/"}>
				<img src="/images/home.png" alt="home icon" />
			</NavLink>
			<NavLink to={"/timer"}>
				<img src="/images/timer.png" alt="timer icon" />
			</NavLink>
			<NavLink to={"/moves"}>
				<img src="/images/moves.png" alt="moves icon" />
			</NavLink>
			<NavLink to={"/health"}>
				<img src="/images/heart.png" alt="heart icon" />
			</NavLink>
			<NavLink to={"/settings"}>
				<img src="/images/settings.png" alt="settings icon" />
			</NavLink>
		</StyledNavbar>
	);
};

export default Navbar;
