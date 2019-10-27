import React, { Fragment, useState, useContext } from "react";
import SliderComponent from '../../../components/SliderComponent'
import { UserContext } from '../../../context'

const PageMain = (props) => {
	const {isLoggedIn} = useContext(UserContext)
	return (
		<Fragment>
			{isLoggedIn && <p>du är inloggad!!</p>}
			<SliderComponent />
		</Fragment>
	);
};


export default PageMain;
