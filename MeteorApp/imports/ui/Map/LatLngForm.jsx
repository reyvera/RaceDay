import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Markers} from '../../api/markers.js';

export default class LatLngForm extends Component {
	addLocation(event) {
		event.preventDefault();

    // Find the next text field via the React ref
    const lat = ReactDOM.findDOMNode(this.refs.lat).value.trim();
    const lng = ReactDOM.findDOMNode(this.refs.lng).value.trim();

    Meteor.call('coord.insert', lat, lng);

    // Clear form
    ReactDOM.findDOMNode(this.refs.lat).value = '';
    ReactDOM.findDOMNode(this.refs.lng).value = '';
	}




	render() {
		return(
			<form onSubmit={this.addLocation.bind(this)}>
				<input type="text" ref="lat" placeholder="Lat:" />
				<input type="text" ref="lng" placeholder="Lng:" />
				<input type="submit" value="Add" />
			</form>
		)
	}
}
