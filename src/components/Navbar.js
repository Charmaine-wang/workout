import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax } from "gsap";
import { Link } from "react-router-dom"

const StyledNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	position: absolute;
	height: 54px;
	top: calc(100% - 54px);
	background: rgba(0,0,0, 0.4);
	& > a img {
		height: 24px;
	}
	& > a:nth-child(2) img {
		height: 30px;
	}
	& > a:nth-child(5) img {
		height: 26px;
	}
`;

const Navbar = () => {

	return (
		<StyledNavbar>
			<Link exact to={"/"}> <img src="/images/home.png" alt="home icon" /> </Link>
			<Link to={"/timer"}> <img src="/images/timer.png" alt="timer icon" /> </Link>
			<Link to={"/moves"}> <img src="/images/moves.png" alt="moves icon" /> </Link>
			<Link to={"/health"}> <img src="/images/heart.png" alt="heart icon" /> </Link>
			<Link to={"/settings"}> <img src="/images/settings.png" alt="settings icon" /> </Link>
		</StyledNavbar>
	);
};


export default Navbar;
