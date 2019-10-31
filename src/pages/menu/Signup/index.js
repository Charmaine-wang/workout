import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Signup from '../../../components/Signup'
import FadedBackground from '../../../components/FadedBackground'

const PageSignup = (props) => {
	return (
		<div>
			<FadedBackground opacity={'0.3'} />
			<Signup />
		</div>
	);
};

export default PageSignup;
