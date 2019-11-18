import React from "react";
import { StyledButton } from './StyledButton'

const Button = ({ ...props }) => {
	return <StyledButton {...props} />;
};
export default Button;
