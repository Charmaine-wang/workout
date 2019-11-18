import styled from "styled-components";

export const StyledTimekeeper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	transition: 0.2s;
	border-radius: 50%;
	color: white;
	background-color: rgba(0, 0, 0, 0.9);

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
		}
		100% {
			box-shadow: 0 0 0 24px rgba(0, 0, 0, 0);
		}
	}
	animation: ${props => (props.isActiveBtn ? "pulse 1s infinite" : "none")};

	/* byt färg till nått nice, eller gör andra animationer */
	> h1 {
		font-size: 70px;
	}
	> h3 {
		color: rgba(255, 255, 255, 0.7);
		font-size: 36px;
	}
	width: 250px;
	height: 250px;
`;
