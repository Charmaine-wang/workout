import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTopIcons = styled.div`
	position: absolute;
	z-index: 3;
	display: flex;
	flex-direction: row;
	padding: 15px 18px 15px 12px;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	> img:nth-child(1) {
		width: 24px;
		height: 24px;
		opacity: 0.7;
	}
	> img:nth-child(2) {
		width: 30px;
		opacity: 0.6;
	}
`;


const TopIcons = (props) => {
	return (
		<StyledTopIcons>
			<img src="images/arrowBack.png" alt="arrow back" />
			<img src={props.iconSrc} alt="choice icon" />
		</StyledTopIcons>
	);
};

export default TopIcons;
