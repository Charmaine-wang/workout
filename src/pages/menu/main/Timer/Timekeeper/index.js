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
	background-color: yellow;
	padding-top: 50px;
`;

const PageTimekeeper = () => {


	return (
		<StyledPageTimekeeper>

			<Timekeeper />
			<Activity />
		</StyledPageTimekeeper>
	);
};

export default PageTimekeeper;
