import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ContentWrapper extends TrackerReact(Component) {
	render() {
		return (
			<div>
				<h1>Map goes here!</h1>
			</div>
		)
	}
}
