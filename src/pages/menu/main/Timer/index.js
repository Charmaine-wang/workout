import React, { useState, useEffect, useContext } from 'react';
import { StyledPageTimer, StyledTimer, ChoiceWrapper } from './StyledTimer'
import { useAuth } from '../../../../authcontext'
import {ArrowBack, FadedBackground, TimeKeeperComponent} from '../../../../components/'


const PageTimer = (props) => {
	const { authUser, authLoading } = useAuth();
	const [isToggled, setToggled] = useState(false);
	const [activity, setActivity] = useState("");

	return (
		<StyledPageTimer>
			<FadedBackground opacity={"0.7"} />
			<TimeKeeperComponent
				isToggled={isToggled}
				goBack={() => setToggled(false)}
				getActivity={activity}
			/>

			<StyledTimer cover={isToggled}>
				<div>
					<p>CHOOSE MODE</p>
					<div />
				</div>
				<ArrowBack />
				<img src="images/timerBg.png" alt="choice background" />

				<ChoiceWrapper onClick={() => setToggled(true) }>
					<div onClick={() => setActivity("running")}>
						<img src="/images/running.png" alt="choice background" />
						<p> RUNNING </p>
					</div>

					<div onClick={() => setActivity("cycling")}>
						<p> CYCLING </p>
						<img src="/images/cycling.png" alt="choice background" />
					</div>

					<div onClick={() => setActivity("walking")}>
						<img src="/images/walking.png" alt="choice background" />
						<p> WALKING </p>
					</div>
				</ChoiceWrapper>
			</StyledTimer>
		</StyledPageTimer>
	);
};

export default PageTimer;
