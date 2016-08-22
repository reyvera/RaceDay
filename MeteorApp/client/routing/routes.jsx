import React from 'react';
import {mount} from 'react-mounter';

import { Accounts } from 'meteor/accounts-base';

import {MainLayout} from '../layout/MainLayout';

import MapWrapper from '../map/MapWrapper';
import Home from '../home/Home';

/* Set to Username only */
// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY',
// });

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Home />)
		})
	}
});

FlowRouter.route('/map', {
	action() {
		mount(MainLayout, {
			content: (<MapWrapper />)
		})
	}
});
