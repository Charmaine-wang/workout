import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBodyInfo = styled.div`
	width: calc(50vw - 1px);
	height: 20vh;
	background-color: rgba(0,0,0, 0.8);
	margin-bottom: 2px;
	padding: 8px 32px;
	> p {
		font-size: 22px;
		opacity: 0.7;
		color: white;
		padding: 8px 0px 3vh;
	}
	> div {
		display: flex;
		flex-direction: row;
		> p {
			font-size: 36px;
			color: white;
			padding: 1vh 10px;
		}
		> p:nth-child(1) {
			background-color: rgba(255,255,255, 0.12);
		}
		> p:nth-child(2) {
			padding: 1vh 8px;
		}
	}
`;

const BodyComponent = (props) => {
	return (
		<StyledBodyInfo>
			<p> {props.title} </p>
			<div>
				<p> {props.value} </p>
				<p> {props.unit} </p>
			</div>
		</StyledBodyInfo>
	);
};

export default BodyComponent;
