import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';

const WeekContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0,0,0, 0.8);
	min-width: 140px;
	height: calc(100vh - 50px - 54px - 128px);
	margin-right: 1px;
	margin-left: 1px;
	> div {
		margin: 20px 0 10px;
		> p:nth-child(1) {
			color: white;
			font-size: 20px;
			text-align: center;
		}
		> p:nth-child(2) {
			color: white;
			font-size: 14px;
			text-align: center;
		}
	}
`;

const WeekWrapper = ({ ...props }) => {
  return (
		<WeekContainer { ...props }>
		</WeekContainer>
  );
};
export default WeekWrapper;
