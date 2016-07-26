import React, {Component, PropTypes} from 'react';

export default class MapMarkers extends Component {
	constructor(props) {
    super(props);
  }

	render() {
    return (
      <div className="myMarker">
        {this.props.text}
      </div>
    );
  }
}

MapMarkers.propTypes = {
	text: PropTypes.string,
};
MapMarkers.defaultProps = {};
