import styled from 'styled-components'

export const StyledSignup = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 80px 0 100px 0;
	align-items: center;
	width: 100%;
	height: 100vh;

	> div > div {
		margin-top: 16px;
		> p {
			position: absolute;
			color: rgba(255, 255, 255, 0.4);
			padding-left: 3%;
			padding-top: 2%;
			font-size: 16px;
		}
		> img {
			opacity: 0.3;
			position: absolute;
			width: 30px;
			height: 30px;
			right: 0;
			padding-top: 2%;
			padding-right: 3%;
		}

		> input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			transition: background-color 5000s ease-in-out 0s;
			-webkit-text-fill-color: #fff !important;
			font-family: "Barlow";
			font-family: Barlow;
		}

		> input {
			border-radius: 5px;
			width: 320px;
			height: 60px;
			background-color: rgba(255, 255, 255, 0.15);
			font-size: 18px;
			color: white;
			padding-top: 7%;
			padding-left: 3%;
			border: none;
			outline: none;
			-webkit-tap-highlight-color: none;

			&::after,
			&::before {
				color: white;
			}
		}
	}
`;
