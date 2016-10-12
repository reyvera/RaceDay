import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import GoogleMap from 'google-map-react';

import LatLngForm from './LatLngForm.jsx';
import MapMarkers from './MapMarkers.jsx';
import {Markers} from '../../api/markers.js';

export default class MapWrapper extends Component {
  renderMarker() {
    return this.props.markers.map((marker) => (
      <MapMarkers key={marker._id} lat={marker.LatCoord} lng={marker.LngCoord} />
    ));
  }

  render() {
    return (
      <div className="map-wrapper">
        <LatLngForm />
        <GoogleMap
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk'
          }} >

          {this.renderMarker()}
        </GoogleMap>
      </div>
    );
  }
}

MapWrapper.propTypes = {
	center: PropTypes.any,
	zoom: PropTypes.number,
  markers: PropTypes.any,
};
MapWrapper.defaultProps = {
	defaultCenter: [0, 0],
	zoom: 1,
};

export default createContainer(() => {
  Meteor.subscribe('markers');

  return {
    markers: Markers.find().fetch(),
  };
}, MapWrapper);
