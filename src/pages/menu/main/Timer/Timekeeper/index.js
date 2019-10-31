import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timekeeper from '../../../../../components/Timekeeper';
import { Route } from 'react-router-dom'
import Activity from '../../../../../components/Activity';
const StyledPageTimekeeper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background: url("/images/backgroundFade.png");
	padding-top: 50px;
	> img {
		position: absolute;
		top: 0;
	}
`;

const PageTimekeeper = () => {


	return (
		<StyledPageTimekeeper>
			<img src="/images/dots.png" alt="dots" />

			<Timekeeper />
			<Activity />
		</StyledPageTimekeeper>
	);
};

export default PageTimekeeper;
