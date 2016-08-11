import React from 'react';
import Home from './Home';
import Details from './Details';
import Profile from './Profile';
import Activity from './Activity';
import Tracking from './Tracking';

const Routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

			showNavigationBar: false,
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
	getActivityRoute() {
    return {
      renderScene(navigator) {
        return <Activity navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
	getTrackingRoute() {
    return {
      renderScene(navigator) {
        return <Tracking navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
	getHistoryRoute() {
		return {
			renderScene(navigator) {
				return <Profile navigator={navigator} />;
			},

			showNavigationBar: false,
		};
	},
};

export default Routes;
