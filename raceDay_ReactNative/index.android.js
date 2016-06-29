import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

class raceDay_ReactNative extends Component {
  render() {
    return (
			<MapView style={styles.map}
				initialRegion={{
      		latitude: 37.78825,
      		longitude: -122.4324,
					latitudeDelta: 0.0022,
      		longitudeDelta: 0.0081,
    		}}
				showsUserLocation={true}
				followsUserLocation={true} />
    );
  }
}

const styles = StyleSheet.create({
  map: {
		position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('raceDay_ReactNative', () => raceDay_ReactNative);
