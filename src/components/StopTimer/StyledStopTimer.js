import styled from 'styled-components'

export const StyledStopTimer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: ${props => (props.showStopBtn ? "-10px" : "-60px")};
	left: calc(50vw - 110px);
	transition: ${props => (props.showStopBtn ? "0.4s" : "0.4s")};
	border-radius: 6px;
	background-color: rgba(255, 255, 255, 0.3);
	font-size: 18px;
	letter-spacing: 1.2px;
	color: white;
	width: 220px;
	height: 44px;
	box-shadow: 0px 0px 20px rgba(0,0,0,0.4);

	> p {
		font-weight: 400;
		margin-top: 10px;
		text-shadow: 0px 0px 20px black;
	}

`;
