import React, {Component, PropTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import controllable from 'react-controllables';

import GoogleMap from 'google-map-react';
import MapMarkers from './MapMarkers';
import LatLngForm from './LatLngForm';

Markers = new Mongo.Collection("markers");

export default class MapWrapper extends TrackerReact(Component) {
  constructor() {
    super();

		this.state = {
			subscription: {
				markers: Meteor.subscribe("userMarkers")
			}
		}
  }

	componentDidMount() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						currentRegion: [
          		position.coords.latitude,
          		position.coords.longitude,
        		]
					});
				}
			);
		}
	}

	componentWillUnmount() {
		this.state.subscription.markers.stop();
	}

	createMapOptions() {
		return{
			minZoomOverride: true,
    	minZoom: 2,
		}
	}

	markers() {
		return Markers.find().fetch();
	}

  render() {
		userLocation = this.state.currentRegion;

		// Map user markers in database to their own respective <MapMarkers /> tag.
		const myPlaces = this.markers().map(marker => {
			const {...coords} = marker;

			return (
				<MapMarkers key={marker._id}
										{...coords} />
			);
		});

		if(userLocation) {
			return (
				<div className="mapWrapper">
					<LatLngForm />
					<GoogleMap
						defaultCenter={this.props.center}
						center={userLocation}
						defaultZoom={this.props.zoom}
						options={this.createMapOptions}
						bootstrapURLKeys={{ key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk'}} >

						{myPlaces}
					</GoogleMap>
				</div>
			);
		}
		else {
			return (
				<div className="mapWrapper">
					<h1>Loading Map...</h1>
					<p>Please allow for location access to view map.</p>
				</div>
			);
		}
  }
}

MapWrapper.propTypes = {
	center: PropTypes.any,
	zoom: PropTypes.number,
};
MapWrapper.defaultProps = {
	center: [0, 0],
	zoom: 8,
};
