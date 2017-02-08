import React from 'react';
import Athlete from '../routes/Athlete';
import Details from '../routes/Details';
import Profile from '../routes/Profile';
import SignIn from '../routes/SignIn';

export const routes = {
	getAthleteRoute() {
		return {
			renderScene(navigator) {
				return <Athlete navigator={navigator} />;
			},

			getTitle() {
				return 'Athlete';
			},
		};
	},
	getDetailsRoute() {
		return {
			renderScene(navigator) {
				return <Details navigator={navigator} />;
			},

			getTitle() {
				return 'Details';
			},
		};
	},
	getProfileRoute() {
		return {
			renderScene(navigator) {
				return <Profile navigator={navigator} />;
			},

			showNavigationBar: false,
		};
	},
	getSignInRoute() {
		return {
			renderScene(navigator) {
				return <SignIn navigator={navigator} />;
			},

			showNavigationBar: false,
		};
	},
};

export default routes;
