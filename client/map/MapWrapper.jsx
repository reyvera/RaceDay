import React, {Component, PropTypes} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import GoogleMap from 'google-map-react';
import LocationMarkers from './MapMarkers';

Markers = new Mongo.Collection("markers");

export default class MapWrapper extends TrackerReact(Component) {
  constructor(props) {
    super(props);
  }

	createMapOptions() {
		return{
			minZoomOverride: true,
    	minZoom: 2,
		}
	}

  render() {
    return (
			<div className="mapWrapper">
				<GoogleMap
				 defaultCenter={this.props.center}
				 center={{lat: 35.3428366, lng: -119.1099741}}
				 defaultZoom={this.props.zoom}
				 options={this.createMapOptions}
				 bootstrapURLKeys={{
					 key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk',
				 }}>
				 <LocationMarkers lat={35.3428366} lng={-119.1099741} text={'A'} />
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
	center: {lat: 59.938043, lng: 30.337157},
	zoom: 15,
};
