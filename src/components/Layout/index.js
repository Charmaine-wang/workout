import React, { useState, useEffect } from "react";
import { Logo } from '../index'
import { StyledLayout } from './StyledLayout'


const Layout = () => {

	return (
		<StyledLayout>
			<Logo className="one" />
			<Logo className="two" />
			<Logo className="three" />
			<Logo className="four" />
			<Logo className="five" />
		</StyledLayout>
	);
};

export default Layout;
