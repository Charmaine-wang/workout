import React from "react";
import { BubbleContainer, StyledBubble } from "./StyledBubble"

const Bubble = ({ ...props }) => {
	return (
		<BubbleContainer>
			{props.icon ? <img src={props.icon} alt="icon" /> : ""}
			<StyledBubble {...props} onclick={props.onClick}>
				<p> {props.hourOrKm} </p>
				<p> {props.unit} </p>
			</StyledBubble>
		</BubbleContainer>
	);
};
export default Bubble;
