import React from "react";
import { StyledModal } from './StyledModal'

const Modal = props => {

	return (
		<StyledModal {...props}>
			<h1>Saved Workout</h1>
		</StyledModal>
	);
};

export default Modal;
