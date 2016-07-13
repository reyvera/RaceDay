import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

class AthleteMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: {
				coords: {}
			},
			region: {
      	latitude: 37.78825,
      	longitude: -122.4324,
      	latitudeDelta: 0.0922,
      	longitudeDelta: 0.0421,
    	}
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
      (position) => {},
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 1000, maximumAge: 0}
    );
    navigator.geolocation.watchPosition(
			(position) => this.setState({position}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 1000, maximumAge: 0}
		);
	}

  render() {
    return (
			<View style={styles.container}>
				<MapView style={styles.map}
					initialRegion={this.state.region}
					showsUserLocation={true}
					followsUserLocation={true} />

				<Text style={styles.coords}>{this.state.position.coords.latitude}, {this.state.position.coords.longitude}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
		position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
	coords: {
		flex: 1,
    // fontWeight: 'bold',
    fontSize: 20,
    // color: '#dddddd',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginBottom: 0,
  },
});

export default AthleteMap;
