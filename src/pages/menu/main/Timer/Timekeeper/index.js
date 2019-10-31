import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timekeeper from '../../../../../components/Timekeeper';
import { Route } from 'react-router-dom'
import Activity from '../../../../../components/Activity';
import FadedBackground from '../../../../../components/FadedBackground';

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

const PageTimekeeper = () => {
	return (
		<div>
			<FadedBackground opacity={'0.65'} />
			<StyledPageTimekeeper>
				<img src="/images/dots.png" alt="dots" />

				<Timekeeper />
				<Activity />
			</StyledPageTimekeeper>
			</div>
	);
};

export default PageTimekeeper;
