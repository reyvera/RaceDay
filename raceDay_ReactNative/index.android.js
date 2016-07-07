import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

class raceDay_ReactNative extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: {
				coords: {}
			}
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => this.setState({position}),
			(error) => alert(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
		navigator.geolocation.watchPosition((position) => {
			this.setState({position});
		});
	}

	render() {
    return (
			<View style={styles.container}>
				<MapView style={styles.map}
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
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
    backgroundColor: 'white',
  },
  map: {
		position: 'absolute',
    right: 0,
    left: 0,
    top: 60,
    bottom: 60,
    margin: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
  },
	coords: {
    // fontWeight: 'bold',
    fontSize: 20,
    // color: '#dddddd',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
});

AppRegistry.registerComponent('raceDay_ReactNative', () => raceDay_ReactNative);
