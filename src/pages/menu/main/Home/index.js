import React, { useState, useEffect } from 'react';
import { StyledPageHome } from './StyledHome'
import {SliderComponent, FadedBackground} from '../../../../components/'

const PageHome = () => {
	return (
		<StyledPageHome>
			<FadedBackground opacity={'1'} />
			<img src="/images/shoeImage.png" alt="shoes background" />
			<SliderComponent />

		</StyledPageHome>
	);
};

export default PageHome;
