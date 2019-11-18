import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { animated } from 'react-spring'

const StyledModal = styled.div`
	opacity: ${props => (props.isActive ? 1 : 0)};
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	transform: translate(-50%, 0%);
	left: 50%;
	width: 250px;
	height: 250px;
	z-index: 2;
	top: 50px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 1);
	color: #ffffff;
	pointer-events: none;
	${props => props.isActive && "animation: fade-in 2s linear;"};

	@keyframes fade-in {
	  0%   {opacity: 0; box-shadow: 0 0 0 0 rgba(0,0,0, 0.8);}
	  30%   {opacity: 1; box-shadow: 0 0 10px 30px rgba(0,0,0, 0)}
	  75%   {opacity: 1;}
	  100%   {opacity: 0;}
	}
`;

const Modal = (props) => {
	const [myState, setmyState] = useState(null);

	// useEffect(() => {
	// 	console.log("mounted");
	// }, []);

	return (
		<StyledModal {...props} >
			<h1>Saved Workout</h1>

		</StyledModal>
	);
};

export default Modal;
