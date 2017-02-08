import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

// import GoogleMap from 'google-map-react';
// import MapGL from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import MapMarkers from './MapMarkers.jsx';
import {Markers} from '../../api/markers.js';

const containerStyle = {
  height: "100%",
  width: "100%"
};

export class MapWrapper extends Component {
  constructor() {
    super();

    this.state = {
      currentRegion: [0, 0],
    }
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            currentRegion: [
              position.coords.longitude,
              position.coords.latitude,
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
    const markerContainer = document.createElement('div');
    markerContainer.style.position = "absolute";
    
    return (
      <div className="map-wrapper">
        {/* <GoogleMap
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.zoom}
          center={this.state.currentRegion}
          bootstrapURLKeys={{
            key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk'
          }} >

          {this.renderMarker()}
        </GoogleMap> */}
        
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v9"
          center={this.state.currentRegion}
          accessToken="pk.eyJ1IjoidmVydXhkZXYiLCJhIjoiY2l1cHU3aGpwMDF0cTJvcGVpYnMycTNqdCJ9.LVfTjQc_XiWY-bXn9s20gQ"
          containerStyle={containerStyle}>
          
          {/* <Layer
            type="symbol"
            layout={{ "icon-image": "marker-15" }}>
            <Feature
              coordinates={this.state.currentRegion} />
          </Layer> */}
          
          <Marker
              container={markerContainer}
              coordinates={this.state.currentRegion}>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="6" fill="#017bff" />
              </svg>
          </Marker>
        </ReactMapboxGl>
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
