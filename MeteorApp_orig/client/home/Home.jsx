import React from 'react';
// import React, {Component, PropTypes} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import controllable from 'react-controllables';

export const Homepage = (props) => {
	const signedInMsg = props.signedIn? "You are signed in" : "You are not signed in"

	return <div>{signedInMsg}</div>
}
