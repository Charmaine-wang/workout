import React from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyle from './styles/Globalstyles';
import {MainPage} from '../src/pages'



const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(180deg, #4d0000 0%, rgba(255, 255, 255, 0) 100%),
		#350000;

		& > img {
				position: absolute;
		}

`;

function App() {

  return (
		<StyledApp>
			<GlobalStyle />
			<img src="/images/dotsred.svg" alt="" />
			<MainPage />

			<Navbar />¨
		</StyledApp>
	);
}

export default App;
