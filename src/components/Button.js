import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.btnWidth ? props.btnWidth : '100%'};
  height: 50px;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  /* transition: box-shadow .3s ease; */
	font-weight: 300;

	margin: ${props => props.margin ? props.margin : '0px'};
	background-color: ${props => props.bgColor ? props.bgColor : 'rgba(0, 0, 0, 1)'};
	color: ${props => props.fontColor ? props.fontColor : 'rgba(0, 0, 0, 1)'};
	font-size: ${props => props.fontSize ? props.fontSize : 'rgba(0, 0, 0, 1)'};

	&::after {
    content: "";
    transition: background-color .3s ease;
  }
  &:active {
    box-shadow: none;
    &::after {
      background-color: rgba(0, 0, 0, 0,05);
    }
  }
`;
// rgba(0, 0, 0, 0.05)

const Button = ({ ...props }) => {
  return (
    <StyledButton {...props} />
  );
};

export default Button;
