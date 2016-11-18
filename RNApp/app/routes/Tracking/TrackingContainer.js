import React, { Component } from 'react';
import Tracking from './Tracking';

const TrackingContainer = (props) => {
	return (
		<Tracking />
	);
};

TrackingContainer.propTypes = {
  user: React.PropTypes.object,
};

export default TrackingContainer;
