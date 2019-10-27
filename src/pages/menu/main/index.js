import React, { Fragment, useState, useContext } from "react";
import styled from 'styled-components';
import SliderComponent from '../../../components/SliderComponent'
import { UserContext } from '../../../context'



const PageMain = (props) => {
	const {isLoggedIn} = useContext(UserContext)
	return (
		<Fragment>
			<img src="/images/shoeImage.png" alt="shoes background" />
			{isLoggedIn && <p>du är inloggad!!</p>}
			<SliderComponent />
		</Fragment>
	);
};


export default PageMain;
