import styled from "styled-components";

export const BubbleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> img {
		width: 22px;
		opacity: 0.25;
		margin-bottom: 3px;
	}
`;

export const StyledBubble = styled.div`
	width: ${props => props.diameter};
	height: ${props => props.diameter};
	max-width: 100px;
	min-width: 70px;
	max-height: 100px;
	min-height: 70px;
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:hover {
		animation: pulseBubble 1s;
	}

	@keyframes pulseBubble {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
		}
		70% {
			box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
		}
	}

	> p:nth-child(1) {
		font-size: 22px;
		color: white;
	}
	> p:nth-child(2) {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.7);
	}
`;
