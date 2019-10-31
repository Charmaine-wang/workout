import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledActivity = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	height: 55%;
	width: 100%;
	> div {
		display: flex;
		justify-content: center;
		height: calc(100% / 2);
		width: 100%;
		> img {
			width: 130px;
			height: 130px;
		}

		> div {
			display: flex;
			justify-content: center;
			> img {
				width: 130px;
				height: 130px;
			}
		}
	}
	> div:first-child {
		display: flex;
		justify-content: space-between;
		width: 100%;

		> div {
			width: calc(100% / 2);
		}
	}
`;

const Activity = () => {
    const [myState, setmyState] = useState(null);

    useEffect(() => {
        console.log("mounted");
    }, []);

    return (
			<StyledActivity>
				<div>
					<div>
						<img src="/images/km.png" alt="bajs" />
					</div>
					<div>
						<img src="/images/burn.png" alt="bajs" />
					</div>
				</div>
				<div>
					<img src="/images/speed.png" alt="" />
				</div>
			</StyledActivity>
		);
};

export default Activity;
