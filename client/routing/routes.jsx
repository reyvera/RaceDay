import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../layout/MainLayout';
import MapWrapper from '../map/MapWrapper';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<MapWrapper />)
		})
	}
});
