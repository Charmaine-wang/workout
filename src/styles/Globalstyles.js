import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Barlow:200,300,400,500,600,700&display=swap');

	*, *:after, *:before {
	padding: 0;
	position: relative;
	box-sizing: border-box;
	margin: 0;

	font-family: 'Barlow', sans-serif;
	font-weight: 200;
	}

`;
export default GlobalStyle;
