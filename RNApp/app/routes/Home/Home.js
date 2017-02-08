import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

import Mapbox, { MapView } from 'react-native-mapbox-gl';

const accessToken = 'pk.eyJ1IjoidmVydXhkZXYiLCJhIjoiY2l1cHU3aGpwMDF0cTJvcGVpYnMycTNqdCJ9.LVfTjQc_XiWY-bXn9s20gQ';
Mapbox.setAccessToken(accessToken);

const Home = (props) => {
	onUpdateUserLocation = (location) => {
		console.log('onUpdateUserLocation', location);
	};

	return (
		<View style={styles.container}>
			<MapView 	ref={map => { this._map = map; }}
								style={styles.map}
								showsUserLocation={true}
								userTrackingMode={Mapbox.userTrackingMode.follow}
								onUpdateUserLocation={this.onUpdateUserLocation} />
		</View>
	);
};

Home.propTypes = {
	onDetailsPress: React.PropTypes.func,
};

export default Home;
