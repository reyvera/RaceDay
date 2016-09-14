import React from 'react';
import {mount} from 'react-mounter';

import { Accounts } from 'meteor/accounts-base';

// import {MainLayout} from '../layout/MainLayout';
import AppContainer from '../layout/app_container';

import MapWrapper from '../map/MapWrapper';
import {Homepage} from '../home/Home';

/* Set to Username only */
// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY',
// });

FlowRouter.route('/', {
	name: 'homepage',
	action() {
		mount(AppContainer, {
			content: (props) => <Homepage {...props} />
		})
	}
});

// FlowRouter.route('/map', {
// 	action() {
// 		mount(MainLayout, {
// 			content: (<MapWrapper />)
// 		})
// 	}
// });
