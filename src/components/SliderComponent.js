import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardSlider from "./CardSlider";

const StyledSliderComponent = styled.div`
	width: 100%;
	top: 19%;

	& > .fixed-container {
		height: 370px;

		& > div > div {
			/* overflow: scroll; */
			::-webkit-scrollbar {
				display: none;
			}

			& > div {
				/* margin: 0 0.5% 0 0; */
			}
		}
	}

	.slick-slide {
		transform: scale(0.8);
		transition: transform 0.2s ease-in-out;
		width: 230px;
		height: 370px;
	}
	.slick-slide.slick-center {
		transform: scale(1);
	}

	.slick-slider {
		height: 100% !important;
		overflow: hidden;
	}
	div > div > .slick-list {
		height: 370px;
		width: 100%;
		/* padding: 0 20% 0 0; */
		& > div > div > div > div {
			height: 370px;
		}
	}
`;

const SliderComponent = () => {
  var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		swipe: true,
		variableWidth: true,
		adaptiveHeight: true
	};

	return (
		<StyledSliderComponent>
			<div className="fixed-container">
				<Slider {...settings}>
					<CardSlider
						cardHref="/timer"
						cardName="TIMER"
						cardImg="/images/timer.png"
					/>
					<CardSlider
						cardHref="/health"
						cardName="HEALTH"
						cardImg="/images/heart.png"
					/>
					<CardSlider
						cardHref="/moves"
						cardName="MOVES"
						cardImg="/images/moves.png"
					/>

				</Slider>
			</div>
		</StyledSliderComponent>
	);
};

export default SliderComponent;
