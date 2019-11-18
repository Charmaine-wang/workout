import styled from 'styled-components'
import { Button } from '../../../../components/'
export const StyledHealth = styled.div`
	height: calc(100vh - 54px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;

export const HealthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10vh;
	width: 100%;
`;

export const BodyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

export const BMIWrapper = styled.div`
	width: 100%;
	height: 10vh;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0 34px;
	> p:nth-child(1) {
		font-size: 24px;
		color: white;
		opacity: 0.8;
		margin-right: 10px;
	}
	> p:nth-child(2) {
		font-size: 40px;
		color: white;
	}
`;
export const StyledButton = styled(Button)`
	position: absolute;
	z-index: 1;
	right: 0;
	margin: 10px 14px;
	height: 40px;
	border-radius: 0;
	transition: 0.5s;
	background-color: ${props =>
		props.saved ? "rgba(150,200,255, 0.3)" : "rgba(255,255,255, 0.15)"};
`;
