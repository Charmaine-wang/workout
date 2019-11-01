import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const StyledTopIcons = styled.div`
	position: absolute;
	z-index: 3;
	display: flex;
	flex-direction: row;
	padding: 15px 18px 15px 12px;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	> a img {
		width: 24px;
		height: 24px;
		opacity: 0.7;
	}
	> img {
		width: 32px;
		opacity: 0.7;
	}
`;


const TopIcons = (props) => {
	return (
		<StyledTopIcons>
			<Link exact to={"/"}> <img src="/images/arrowBack.png" alt="arrow back" /> </Link>
			<img src={props.iconSrc} alt="choice icon" />
		</StyledTopIcons>
	);
};

export default TopIcons;
