import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles';
import Button from '../../components/Button';

import AthleteMap from './AthleteMap';

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

const Activity = (props) => {
  return (
    <View style={styles.container}>
			<AthleteMap />
    </View>
  );
};

Activity.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Activity;
