import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../layout/MainLayout';

import MapWrapper from '../map/MapWrapper';
import Home from '../home/Home';

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
