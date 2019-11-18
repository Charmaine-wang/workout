import styled from "styled-components";

export const StyledCardSlider = styled.div`
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
		background-color: rgba(0, 0, 0, 0.5);
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
			& > p {
				padding-bottom: 16px;
				font-size: 30px;
				color: white;
			}
		}
	}
`;
