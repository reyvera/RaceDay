import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import GoogleMap from 'google-map-react';

import MapMarkers from './MapMarkers.jsx';
import {Markers} from '../../api/markers.js';

export class MapWrapper extends Component {
  constructor() {
    super();

    this.state = {

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

  renderMarker() {
    return this.props.markers.map((marker) => (
      <MapMarkers key={marker._id} lat={marker.coords.LatCoord} lng={marker.coords.LngCoord} />
    ));
  }

  render() {
    return (
      <div className="map-wrapper">
        <GoogleMap
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.zoom}
          center={this.state.currentRegion}
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
  var sessionOwner = Meteor.userId();
  return {
    markers: Markers.find({owner: sessionOwner}).fetch(),
  };
}, MapWrapper);
