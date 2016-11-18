import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles';
import Button from '../../components/Button';

import TrackingMap from './TrackingMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

const Tracking = (props) => {
  return (
    <View style={styles.container}>
		<TrackingMap />
    </View>
  );
};

Tracking.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Tracking;
