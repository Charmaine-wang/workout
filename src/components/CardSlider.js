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
		background-color: lightsalmon;
		border-radius: 5px;
		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 240px;
			justify-content: flex-start;

			& > img {
				width: 80px;
				height: 70px;
			}
			& > h1{
				padding-bottom: 10px;
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
					<h1>{props.cardName}</h1>
					<img src={props.cardImg} alt="" />
				</div>
			</a>
		</StyledCardSlider>
	);
};

export default CardSlider;
