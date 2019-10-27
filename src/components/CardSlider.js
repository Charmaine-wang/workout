import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCardSlider = styled.div`
	width: 100%;
	height: 100%;
	transform: ${props => props.scaleCard};
	& > a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, 0.5);
		border-radius: 10px;
		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 180px;
			justify-content: flex-start;
			& > img {
				width: 80px;
			}
			& > p{
				padding-bottom: 16px;
				font-size: 30px;
				color: white;
			}
		}
	}
`;

const CardSlider = (props) => {
	useEffect(() => {
		console.log("mounted");
	}, []);

	return (
		<StyledCardSlider>
			<a href={props.cardHref}>
				<div>
					<p>{props.cardName}</p>
					<img src={props.cardImg} alt="icon" />
				</div>
			</a>
		</StyledCardSlider>
	);
};

export default CardSlider;
