import React, {Component} from 'react';

export default class LatLngForm extends Component {
	addLocation(event) {
		event.preventDefault();

		var lat = this.refs.lat.value.trim();
		var lng = this.refs.lng.value.trim();

		if(lat && lng) {
			Meteor.call('addLocation', lat, lng, () => {
				this.refs.lat.value = "";
				this.refs.lng.value = "";
			})
		}
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
