import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	MapView
} from 'react-native';

class raceDay_ReactNative extends Component {
  render() {
    return (
			<MapView style={styles.map} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
	map: {
		flex: 1,
	},
});

AppRegistry.registerComponent('raceDay_ReactNative', () => raceDay_ReactNative);
