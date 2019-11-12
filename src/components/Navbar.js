import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap";
import { NavLink } from "react-router-dom"

const StyledNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	position: absolute;
	height: 54px;
	top: calc(100% - 54px);
	background: rgba(0, 0, 0, 0.4);
	& > a img {
		height: 24px;
		/* transform: scale(0.8); */
	}
	& > a:nth-child(2) img {
		height: 30px;
	}
	& > a:nth-child(5) img {
		height: 26px;
	}
	& > a img:hover,
	a img:active {
		transform: scale(1.2);
		top: 12px;
		/* border-bottom: 1px solid white; */
	}
	& > a:hover,
	a:active {
		height: 50px;
		border-bottom: 1px solid white;
	}

`;

const Navbar = () => {

	return (
		<StyledNavbar>
			<NavLink exact="true" to={"/"}> <img src="/images/home.png" alt="home icon" /> </NavLink>
			<NavLink to={"/timer"}> <img src="/images/timer.png" alt="timer icon" /> </NavLink>
			<NavLink to={"/moves"}> <img src="/images/moves.png" alt="moves icon" /> </NavLink>
			<NavLink to={"/health"}> <img src="/images/heart.png" alt="heart icon" /> </NavLink>
			<NavLink to={"/settings"}> <img src="/images/settings.png" alt="settings icon" /> </NavLink>
		</StyledNavbar>
	);
};


export default Navbar;
