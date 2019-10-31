import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timekeeper from '../../../../../components/Timekeeper';
import { Route } from 'react-router-dom'
import Activity from '../../../../../components/Activity';
import FadedBackground from '../../../../../components/FadedBackground';
import { Link } from "react-router-dom";

const StyledPageTimekeeper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	padding-top: 50px;
	> img {
		position: absolute;
		top: 0;
	}
`;

const ArrowBack = styled.div`
	position: absolute;
	z-index: 3;
	padding: 15px 18px 15px 12px;
	> a img {
		width: 24px;
		height: 24px;
		opacity: 0.7;
	}
`;

const PageTimekeeper = () => {
	return (
		<div>
			<FadedBackground opacity={'0.65'} />
			<ArrowBack>
				<Link to={"/timer"}> <img src="/images/arrowBack.png" alt="arrow back" /> </Link>
			</ArrowBack>

			<StyledPageTimekeeper>
				<img src="/images/dots.png" alt="dots" />

				<Timekeeper />
				<Activity />
			</StyledPageTimekeeper>
			</div>
	);
};

export default PageTimekeeper;
