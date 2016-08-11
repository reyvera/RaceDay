import React, {Component, PropTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import controllable from 'react-controllables';

export default class Home extends TrackerReact(Component) {
  render() {
			return (
				<div>
					Hello World
				</div>
			);
  }
}
