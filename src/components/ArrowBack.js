import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import { withRouter } from "react-router";


const StyledArrowBack = styled.div`
	position: absolute;
	z-index: 3;
	display: ${props => (props.hideArrow ? "none" : "flex")};
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

`;

const ArrowBack = (props) => {
	return (
		<StyledArrowBack {...props}>
			<NavLink exact="true" to={"/"}>
				<img src="/images/arrowBack.png" alt="arrow back" />
			</NavLink>
		</StyledArrowBack>
	);
};

export default ArrowBack;
