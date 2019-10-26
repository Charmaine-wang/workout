import React from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/Globalstyles';
import { MainPage } from '../src/pages'


const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background-color: black;

	& > img {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	& > img:nth-child(2) {
		opacity: 0.3;
	}

`;

function App() {

  return (
		<StyledApp>
			<GlobalStyle />
			<img src="/images/backgroundFade.png" alt="faded background" />
			<MainPage />

			<Navbar />
		</StyledApp>
	);
}

export default App;
