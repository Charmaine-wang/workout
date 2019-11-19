import styled from 'styled-components'

export const StyledLogin = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;

	> img {
		width: 100px;
		margin-bottom: 40px;
	}

	> p {
		font-size: 30px;
		color: white;
		margin-bottom: 10px;
	}

	> div {
		margin-top: 16px;

		> img {
			width: 20px;
			position: absolute;
			margin: 18px 0 0 14px;
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
			height: 50px;
			background-color: rgba(255, 255, 255, 0.15);
			font-size: 16px;
			color: white;
			padding-left: 50px;
			border: none;
			outline: none;
			-webkit-tap-highlight-color: none;

			&::placeholder {
				/* Chrome, Firefox, Opera, Safari 10.1+ */
				color: white;
				opacity: 0.7; /* Firefox */
			}

			&::value {
				font-weight: 200;
			}

			&::after,
			&::before {
				color: white;
			}
		}
	}

	> a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		letter-spacing: 0.3px;
		> span {
			font-weight: 400;
			color: white;
		}
	}

	.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`;
