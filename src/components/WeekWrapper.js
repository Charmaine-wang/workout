import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';

const WeekContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0,0,0, 0.8);
	min-width: 140px;
	height: calc(100vh - 48px - 54px - 98px);
	margin-right: 1px;
	margin-left: 1px;
	overflow: hidden;

	> div {
		margin: 26px 0 0;
		> p {
			color: white;
			font-size: 20px;
			> span {
				font-size: 14px;
			}
		}
	}
	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
		max-height: 440px;
	}
`;

const WeekWrapper = ({ ...props }) => {
  return (
		<WeekContainer { ...props }>

		</WeekContainer>
  );
};
export default WeekWrapper;
