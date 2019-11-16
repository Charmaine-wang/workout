import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { animated } from 'react-spring'



const StyledModal = styled.div`

	/* display: ${props => (props.isActive ? "flex" : "none")}; */
	opacity: 0;
	/* opacity:${props => (props.isActive ? 1 : 0)}; */
	display: flex;
	width: 90vw;
	height: 200px;
	position: fixed;
	z-index: 4;
	top: 100px;
	left: 5%;
	flex-direction: column;
	border-radius: 10px;
	background: rgba(0, 0, 0, 0.8);
	color: #ffffff;
	justify-content: space-around;
	align-items: center;
	pointer-events: none;
	${props => props.isActive && "animation: fade-in 2s linear;"}
@keyframes fade-in {
    0%   {opacity: 0;}
    25%   {opacity: 1;}
    75%   {opacity: 1;}
    100%   {opacity: 0;}
}


`;

const Modal = (props) => {
	console.log(props)
	const [myState, setmyState] = useState(null);

	useEffect(() => {
		console.log("mounted");
	}, []);

	console.log(props);
	return (
		<StyledModal {...props} >
<h1>Saved workout</h1>

		</StyledModal>
	);
};

export default Modal;
