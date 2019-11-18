import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHealth = styled.div`
	width: 350px;
	height: 16vh;
	min-height: 90px;
	background-color: rgba(0,0,0, 0.5);
	margin-bottom: 8px;
	border-radius: 4px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	> p {
		font-size: 22px;
		opacity: 0.7;
		color: white;
	}
	> div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		> p {
			font-size: 32px;
			color: white;
		}
	}
`;

const HealthComponent = (props) => {
	return (
		<StyledHealth>
			<p> {props.title} </p>
			<div>
				<p> {props.firstValue} </p>
				<p> {props.secondValue} </p>
			</div>
		</StyledHealth>
	);
};

export default HealthComponent;
