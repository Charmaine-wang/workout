import styled from 'styled-components'

export const StyledPageTimer = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;
export const StyledTimer = styled.div`
	position: absolute;
	height: 100%;
	overscroll-behavior-x: hidden;
	right: ${props => (props.cover ? "100vw" : "0")};
	transition: all 0.42s ease-in-out;

	> div:nth-child(1) {
		background-color: rgba(0, 0, 0, 0.4);
		height: 200px;
		width: 100%;
		position: absolute;
		z-index: 1;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		> p {
			font-size: 26px;
			color: white;
			z-index: 2;
			padding-bottom: 12px;
		}
		> div {
			width: 230px;
			height: 5px;
			background-color: rgba(255, 255, 255, 0.3);
			border-radius: 3px;
		}
	}
	> img {
		width: 100%;
		height: 190px;
		opacity: 1;
		margin-bottom: -3px;
	}
`;

export const ChoiceWrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 190px - 54px);
	display: flex;
	flex-direction: column;
	> div {
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
	}
	> div {
		width: 100%;
		height: 100%;
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&:nth-child(3) {
			border-bottom: none;
		}

		> p {
			font-size: 30px;
			color: white;
			padding: 0px 26px;
		}
		> img {
			width: 16vh;
			opacity: 0.16;
		}
	}
`;
