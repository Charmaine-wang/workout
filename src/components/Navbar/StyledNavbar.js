import styled from 'styled-components'

export const StyledNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	position: absolute;
	height: 54px;
	top: calc(100% - 54px);
	background: rgba(0, 0, 0, 0.4);
	& > a img {
		height: 23px;
		transition: 0.2s;
	}
	& > a:nth-child(2) img {
		height: 28px;
	}
	& > a:nth-child(5) img {
		height: 26px;
	}

	& > a img:hover,
	a img:active {
		transform: scale(1.3);
		top: 14px;
	}
	& > a:nth-child(2) img:hover,
	a:nth-child(2) img:active {
		transform: scale(1.3);
		top: 12px;
	}

	& > a:hover,
	a:active {
		height: 54px;
		border-bottom: 2px solid white;
	}
`;
