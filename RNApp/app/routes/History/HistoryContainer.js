import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import History from './History';

class HistoryContainer extends Component {
  handleSignOut() {
    Meteor.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <Profile
        user={user}
        signOut={this.handleSignOut.bind(this)}
      />
    );
  }
}

HistoryContainer.propTypes = {
  user: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, HistoryContainer);
