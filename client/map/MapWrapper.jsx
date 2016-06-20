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
    return (
			<div className="mapWrapper">
				<LatLngForm />

				<GoogleMap
				 	defaultCenter={this.props.center}
				 	center={{lat: 35.3428366, lng: -119.1099741}}
				 	defaultZoom={this.props.zoom}
				 	options={this.createMapOptions}
				 	bootstrapURLKeys={{
					 key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk',
				 	}}>
				 	<MapMarkers lat={35.3428366} lng={-119.1099741} text={'A'} />
			 	</GoogleMap>
				<ul>
					{this.markers().map((marker) => {
						return "Lat:" + marker.userLat + ", Lng:" + marker.userLng + "; "
					})}
				</ul>
			</div>
    );
  }
}

MapWrapper.propTypes = {
	center: PropTypes.any,
	zoom: PropTypes.number,
};
MapWrapper.defaultProps = {
	center: {lat: 59.938043, lng: 30.337157},
	zoom: 15,
};
