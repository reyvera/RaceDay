import React, {Component, PropTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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
		const myPlaces = this.markers().map(marker => {
			const {...coords} = marker;

			return (
				<MapMarkers key={marker._id}
										{...coords} />
			);
		});

		return (
			<div className="mapWrapper">
				<LatLngForm />
				<GoogleMap
					center={this.props.center}
					defaultZoom={this.props.zoom}
					options={this.createMapOptions}
					bootstrapURLKeys={{
					 key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk',
					}}>
					{myPlaces}
				</GoogleMap>
			</div>
		);
  }
}

MapWrapper.propTypes = {
	center: PropTypes.any,
	zoom: PropTypes.number,
};
MapWrapper.defaultProps = {
	center: [35.3428366, -119.1099741],
	zoom: 2,
};
