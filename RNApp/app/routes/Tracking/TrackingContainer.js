import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Tracking from './Tracking';

class TrackingContainer extends Component {
  handleSignOut() {
    Meteor.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <Tracking
        user={user}
        signOut={this.handleSignOut.bind(this)}
      />
    );
  }
}

TrackingContainer.propTypes = {
  user: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, TrackingContainer);
