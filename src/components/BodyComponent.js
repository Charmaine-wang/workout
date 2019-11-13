import React, { useState, useEffect } from 'react';
import Button from '../components/Button'
import firebase, {firestore} from '../firebase'
import styled from 'styled-components';
import { useAuth } from "../authcontext";

const StyledBodyInfo = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	> div {
		width: 50vw;
		height: 20vh;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		padding: 8px 22px;
		> p {
			font-size: 22px;
			opacity: 0.7;
			color: white;
			padding: 8px 0px 3vh;
		}
		> div {
			display: flex;
			flex-direction: row;
			> button {
				background-color: red;
			}

			> p {
				font-size: 32px;
				color: white;
				padding: 2vh 8px;
			}
			> input {
				font-size: 36px;
				color: white;
				width: 84px;
				height: 70px;
				background-color: rgba(255, 255, 255, 0.12);
				padding: 1vh 10px;
				border: none;
			}

			> p:first-child {
				padding: 1vh 8px;
			}
		}
	}
`;

const BodyComponent = (props) => {
const { authUser, authLoading } = useAuth();


	return (
		<StyledBodyInfo {...props}
		//  onSubmit={props.onSubmit}
		 >
			{/* <div>
				<p>Weight</p>

				<div {...props}>
					<input
						{...props}
						onChange={props.onChangeWeight}
						ref={props.refWeight}
						type="text"
						name="weight"
						placeholder={props.placeWeight}
						id="weight"
					/>
					<p>kg</p>
				</div>
			</div>

			<div>
				<p>Length</p>
				<div {...props}>
					<input
						{...props}
						onChange={props.onChangeLength}
						ref={props.refLenght}
						type="text"
						name="length"
						placeholder={props.placeLength}
						id="length"
					/>
					<p>cm</p>
				</div>

				<Button
					margin="0 0 0 0"
					// id="weight"
					onClick={props.onClick}
					btnWidth="100px"
					fontColor="white"
					bgColor="rgba(255,255,255, 0.3)"
					fontSize="20px"
					type="submit"
				>
					lenth
				</Button>
			</div> */}
		</StyledBodyInfo>
	);
};

export default BodyComponent;
