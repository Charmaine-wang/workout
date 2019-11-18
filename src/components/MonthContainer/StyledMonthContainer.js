import styled from 'styled-components'

export const StyledMonthContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	min-width: 140px;
	height: calc(100vh - 48px - 54px - 58px);
	border-right: 2px solid rgba(255, 255, 255, 0.1);
	overflow: hidden;

	> div {
		margin: 20px 0 0;
		> p {
			text-align: center;
			color: white;
			font-size: 20px;
		}
		> p:nth-child(2) {
			font-size: 15px;
			letter-spacing: 0.8px;
		}
	}
	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 60vh;
		max-height: 450px;
	}
`;
