import React from 'react';
import Activity from './Activity';
import Routes from '../';

const onDetailsPress = (navigator) => {
  return navigator.push(Routes.getDetailsRoute());
};

const ActivityContainer = (props) => {
  return (
    <Activity
      onDetailsPress={() => onDetailsPress(props.navigator)}
    />
  );
};

ActivityContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default ActivityContainer;
