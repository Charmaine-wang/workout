import styled from 'styled-components';

export const StyledFadedBackground = styled.img`
	width: 100%;
	height: 100vh;
	position: absolute;
	opacity: ${props => props.opacity};
`;

