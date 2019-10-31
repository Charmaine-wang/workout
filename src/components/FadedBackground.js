import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.img`
	width: 100%;
	height: 100vh;
	position: absolute;
	opacity: ${props => props.opacity};
`;

const FadedBackground = (props) => {
  return (
    <StyledBackground {...props} src="/images/backgroundFade.png" alt="faded background" />
  );
};

export default FadedBackground;
