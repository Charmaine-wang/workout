import styled from 'styled-components'

export const StyledMoves = styled.div`
	> div:nth-child(1) {
		padding: 18px 20px 40px;
		> div {
			display: flex;
			transition: 0.3s;
			flex-direction: column;
			align-items: flex-end;
			width: 100%;
			&:nth-child(1) {
				height: ${props => (props.isDay ? "0px" : "0px")};
				opacity: ${props => (props.isDay ? "0" : "1")};
				margin-left: ${props => (props.isDay ? "20px" : "0")};
			}
			&:nth-child(2) {
				height: ${props => (props.isDay ? "0px" : "0px")};
				opacity: ${props => (props.isDay ? "1" : "0")};
				margin-left: ${props => (props.isDay ? "0" : "20px")};
			}
			> p {
				color: white;
				font-size: 18px;
				> span {
					font-size: 20px;
				}
			}
		}
	}

	> div:nth-child(2) {
		display: flex;
		flex-direction: row;
		width: 100%;
		color: white;
		> div {
			width: 50%;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			&:nth-child(1) {
				background-color: ${props =>
					props.isDay ? "rgba(255,255,255, 0.35)" : "rgba(255,255,255, 0.2)"};
				font-weight: ${props => (props.isDay ? "400" : "200")};
				font-size: ${props => (props.isDay ? "22px" : "18px")};
				transition: 0.2s;
			}
			&:nth-child(2) {
				background-color: ${props =>
					props.isDay ? "rgba(255,255,255, 0.2)" : "rgba(255,255,255, 0.35)"};
				font-weight: ${props => (props.isDay ? "200" : "400")};
				font-size: ${props => (props.isDay ? "18px" : "22px")};
				transition: 0.2s;
			}
		}
	}
`;

export const MonthSlider = styled.div`
	display: ${props => (props.flexWeek ? "none" : "flex")};
	flex-direction: row;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		-webkit-appearance: none;
	}
`;

export const DayWrapper = styled.div`
	display: ${props => (props.flexDay ? "flex" : "none")};
	flex-direction: column;

	> img {
		opacity: 1;
		width: 100%;
		height: 130px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: row;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		width: 100%;
		height: calc((100vh - 58px - 48px - 130px - 54px) / 3);

		> p {
			font-size: 22px;
			color: white;
			opacity: 0.8;
			width: 44px;
		}

		> img {
			width: 40px;
			opacity: 0.3;
		}
	}
	> div:nth-child(4) {
		border-bottom: none;
	}
`;
