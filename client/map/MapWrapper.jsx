import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Map from 'google-maps-react';

export default class MapWrapper extends TrackerReact(Component) {
	render() {
		return (
			<div>
				<h1>Map goes here!</h1>
				<Map google={this.props.google} zoom={14}>
				</Map>
			</div>
		)
	}
}
