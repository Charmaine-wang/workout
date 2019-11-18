import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	top: 17%;
`;

export const StyledSliderComponent = styled.div`
	& > .fixed-container {
		height: 370px;
		& > div > div {
			::-webkit-scrollbar {
				display: none;
			}
			& > div {
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
		& > div > div > div > div {
			height: 370px;
		}
	}
`;

export const WelcomingWrapper = styled.p`
	margin-top: 4vh;

	> p:nth-child(1) {
		color: white;
		font-size: 32px;
		text-align: center;
		font-weight: 300;
	}
	> p:nth-child(2) {
		color: white;
		font-size: 24px;
		text-align: center;
		margin-top: 10px;
	}
`;
