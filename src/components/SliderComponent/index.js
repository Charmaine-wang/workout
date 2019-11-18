import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardSlider } from "../index";
import { useAuth } from "../../authcontext";
import { Wrapper, StyledSliderComponent, WelcomingWrapper } from './StyledSliderComponent'



const SliderComponent = () => {
	const { authUser, authLoading } = useAuth();
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
		<Wrapper>
			<StyledSliderComponent>
				<div className="fixed-container">
					<Slider {...settings}>
						<CardSlider
							cardLink="/timer"
							cardName="TIMER"
							cardImg="/images/timer.png"
						/>
						<CardSlider
							cardLink="/moves"
							cardName="MOVES"
							cardImg="/images/moves.png"
						/>
						<CardSlider
							cardLink="/health"
							cardName="HEALTH"
							cardImg="/images/heart.png"
						/>
					</Slider>
				</div>
			</StyledSliderComponent>
			<WelcomingWrapper>
				<p> Hi {authUser.displayName} </p>
				<p> Time for workout </p>
			</WelcomingWrapper>
		</Wrapper>
	);
};

export default SliderComponent;
