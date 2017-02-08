import React from 'react';
import Athlete from './Athlete';
import Routes from '../../config/routes';

const AthleteContainer = (props) => {
  return (
    <Athlete
      onDetailsPress={() => props.navigator.push(Routes.getDetailsRoute())}
    />
  );
};

AthleteContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default AthleteContainer;
