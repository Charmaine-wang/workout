import React from "react";
import { StyledFadedBackground } from './StyledFadedBackground'

const FadedBackground = props => {
	return (
		<StyledFadedBackground
			{...props}
			src="/images/backgroundFade.png"
			alt="faded background"
		/>
	);
};

export default FadedBackground;
