import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Meteor, {createContainer} from 'react-native-meteor';
import MapView from 'react-native-maps';

class TrackingMap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPosition: {
				coords: {}
			},
			initialPosition: {
				coords: {}
			},
			lastPosition: {
				coords: {}
			},
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			}
		};
	}

	watchID :
		? number = null;

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			var initialPosition = position;
			var currentPosition = position;

			this.setState({initialPosition});
			this.setState({currentPosition});

			this.pushCoords();
		}, (error) => alert(error.message), {
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 0
		});
		navigator.geolocation.watchPosition((position) => {
			var lastPosition = this.state.currentPosition;
			var currentPosition = position;

			this.setState({lastPosition});
			this.setState({currentPosition});

			if ((this.state.currentPosition.coords.latitude != this.state.initialPosition.coords.latitude) || (this.state.currentPosition.coords.longitude != this.state.initialPosition.coords.longitude)) {
				this.pushCoords();
			}
		}, (error) => alert(error.message), {
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 0
		});
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	pushCoords() {
		const {markersDB} = this.props;

		if (markersDB === true) {
			Meteor.call('coord.insert', this.state.currentPosition.coords.latitude, this.state.currentPosition.coords.longitude);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.map} initialRegion={this.state.region} showsUserLocation={true} followsUserLocation={true}/>

				<Text style={styles.coords}>Athlete Subscriptions</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	map: {
		position: 'absolute',
		right: 0,
		left: 0,
		top: 0,
		bottom: 0
	},
	coords: {
		flex: 1,
		// fontWeight: 'bold',
		fontSize: 20,
		color: '#ffffff',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		textAlign: 'center',
		alignSelf: 'flex-end',
		// marginBottom: 0,
	}
});

TrackingMap.propTypes = {
	markersDB: React.PropTypes.bool
};

export default createContainer(() => {
	const handle = Meteor.subscribe('markers');
	return {markersDB: handle.ready()};
}, TrackingMap);
