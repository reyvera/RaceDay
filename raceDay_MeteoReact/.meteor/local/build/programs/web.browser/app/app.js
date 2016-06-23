var require = meteorInstall({"client":{"layout":{"MainLayout.jsx":["react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/layout/MainLayout.jsx                                                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({MainLayout:function(){return MainLayout}});var React;module.import('react',{"default":function(v){React=v}});
                                                                                     //
var MainLayout = function MainLayout(_ref) {                                         // 3
	var content = _ref.content;                                                         // 3
	return React.createElement(                                                         // 3
		"div",                                                                             // 4
		null,                                                                              // 4
		React.createElement(                                                               // 5
			"header",                                                                         // 5
			null,                                                                             // 5
			React.createElement(                                                              // 6
				"h2",                                                                            // 6
				null,                                                                            // 6
				"raceDay: The official athlete tracking app!"                                    // 6
			),                                                                                // 6
			React.createElement(                                                              // 7
				"nav",                                                                           // 7
				null,                                                                            // 7
				React.createElement(                                                             // 8
					"a",                                                                            // 8
					{ href: "/" },                                                                  // 8
					"Map"                                                                           // 8
				)                                                                                // 8
			)                                                                                 // 7
		),                                                                                 // 5
		React.createElement(                                                               // 11
			"main",                                                                           // 11
			null,                                                                             // 11
			content                                                                           // 12
		)                                                                                  // 11
	);                                                                                  // 4
};                                                                                   // 3
///////////////////////////////////////////////////////////////////////////////////////

}]},"map":{"LatLngForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/map/LatLngForm.jsx                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                     //
                                                                                     //
                                                                                     // 1
                                                                                     //
var LatLngForm = function (_Component) {                                             //
	_inherits(LatLngForm, _Component);                                                  //
                                                                                     //
	function LatLngForm() {                                                             //
		_classCallCheck(this, LatLngForm);                                                 //
                                                                                     //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));        //
	}                                                                                   //
                                                                                     //
	LatLngForm.prototype.addLocation = function () {                                    //
		function addLocation(event) {                                                      //
			var _this2 = this;                                                                // 4
                                                                                     //
			event.preventDefault();                                                           // 5
                                                                                     //
			var lat = this.refs.lat.value.trim();                                             // 7
			var lng = this.refs.lng.value.trim();                                             // 8
                                                                                     //
			if (lat && lng) {                                                                 // 10
				Meteor.call('addLocation', lat, lng, function () {                               // 11
					_this2.refs.lat.value = "";                                                     // 12
					_this2.refs.lng.value = "";                                                     // 13
				});                                                                              // 14
			}                                                                                 // 15
		}                                                                                  // 16
                                                                                     //
		return addLocation;                                                                //
	}();                                                                                //
                                                                                     //
	LatLngForm.prototype.render = function () {                                         //
		function render() {                                                                //
			return React.createElement(                                                       // 19
				'form',                                                                          // 20
				{ onSubmit: this.addLocation.bind(this) },                                       // 20
				React.createElement('input', { type: 'text', ref: 'lat', placeholder: 'Lat:' }),
				React.createElement('input', { type: 'text', ref: 'lng', placeholder: 'Lng:' }),
				React.createElement('input', { type: 'submit', value: 'Add' })                   // 23
			);                                                                                // 20
		}                                                                                  // 26
                                                                                     //
		return render;                                                                     //
	}();                                                                                //
                                                                                     //
	return LatLngForm;                                                                  //
}(Component);                                                                        //
                                                                                     //
module.export("default",exports.default=(LatLngForm));                               //
///////////////////////////////////////////////////////////////////////////////////////

}],"MapMarkers.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/map/MapMarkers.jsx                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});
                                                                                     //
                                                                                     //
                                                                                     // 1
                                                                                     //
var MapMarkers = function (_Component) {                                             //
  _inherits(MapMarkers, _Component);                                                 //
                                                                                     //
  function MapMarkers(props) {                                                       // 4
    _classCallCheck(this, MapMarkers);                                               // 4
                                                                                     //
    return _possibleConstructorReturn(this, _Component.call(this, props));           // 4
  }                                                                                  // 6
                                                                                     //
  MapMarkers.prototype.render = function () {                                        //
    function render() {                                                              //
      return React.createElement(                                                    // 9
        "div",                                                                       // 10
        { className: "myMarker" },                                                   // 10
        this.props.text                                                              // 11
      );                                                                             // 10
    }                                                                                // 14
                                                                                     //
    return render;                                                                   //
  }();                                                                               //
                                                                                     //
  return MapMarkers;                                                                 //
}(Component);                                                                        //
                                                                                     //
module.export("default",exports.default=(MapMarkers));                               //
                                                                                     //
                                                                                     //
MapMarkers.propTypes = {                                                             // 17
  text: PropTypes.string                                                             // 18
};                                                                                   // 17
MapMarkers.defaultProps = {};                                                        // 20
///////////////////////////////////////////////////////////////////////////////////////

}],"MapWrapper.jsx":["babel-runtime/helpers/extends","babel-runtime/helpers/objectWithoutProperties","babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-controllables","google-map-react","./MapMarkers","./LatLngForm",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/map/MapWrapper.jsx                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _extends;module.import('babel-runtime/helpers/extends',{"default":function(v){_extends=v}});var _objectWithoutProperties;module.import('babel-runtime/helpers/objectWithoutProperties',{"default":function(v){_objectWithoutProperties=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});var controllable;module.import('react-controllables',{"default":function(v){controllable=v}});var GoogleMap;module.import('google-map-react',{"default":function(v){GoogleMap=v}});var MapMarkers;module.import('./MapMarkers',{"default":function(v){MapMarkers=v}});var LatLngForm;module.import('./LatLngForm',{"default":function(v){LatLngForm=v}});
                                                                                     //
                                                                                     //
                                                                                     //
                                                                                     //
                                                                                     // 1
                                                                                     // 2
                                                                                     // 3
                                                                                     //
                                                                                     // 5
                                                                                     // 6
                                                                                     // 7
                                                                                     //
Markers = new Mongo.Collection("markers");                                           // 9
                                                                                     //
var MapWrapper = function (_TrackerReact) {                                          //
	_inherits(MapWrapper, _TrackerReact);                                               //
                                                                                     //
	function MapWrapper() {                                                             // 12
		_classCallCheck(this, MapWrapper);                                                 // 12
                                                                                     //
		var _this = _possibleConstructorReturn(this, _TrackerReact.call(this));            // 12
                                                                                     //
		_this.state = {                                                                    // 15
			subscription: {                                                                   // 16
				markers: Meteor.subscribe("userMarkers")                                         // 17
			}                                                                                 // 16
		};                                                                                 // 15
		return _this;                                                                      // 12
	}                                                                                   // 20
                                                                                     //
	MapWrapper.prototype.componentDidMount = function () {                              //
		function componentDidMount() {                                                     //
			var _this2 = this;                                                                // 22
                                                                                     //
			if (navigator.geolocation) {                                                      // 23
				navigator.geolocation.getCurrentPosition(function (position) {                   // 24
					_this2.setState({                                                               // 26
						currentRegion: [position.coords.latitude, position.coords.longitude]           // 27
					});                                                                             // 26
				});                                                                              // 32
			}                                                                                 // 34
		}                                                                                  // 35
                                                                                     //
		return componentDidMount;                                                          //
	}();                                                                                //
                                                                                     //
	MapWrapper.prototype.componentWillUnmount = function () {                           //
		function componentWillUnmount() {                                                  //
			this.state.subscription.markers.stop();                                           // 38
		}                                                                                  // 39
                                                                                     //
		return componentWillUnmount;                                                       //
	}();                                                                                //
                                                                                     //
	MapWrapper.prototype.createMapOptions = function () {                               //
		function createMapOptions() {                                                      //
			return {                                                                          // 42
				minZoomOverride: true,                                                           // 43
				minZoom: 2                                                                       // 44
			};                                                                                // 42
		}                                                                                  // 46
                                                                                     //
		return createMapOptions;                                                           //
	}();                                                                                //
                                                                                     //
	MapWrapper.prototype.markers = function () {                                        //
		function markers() {                                                               //
			return Markers.find().fetch();                                                    // 49
		}                                                                                  // 50
                                                                                     //
		return markers;                                                                    //
	}();                                                                                //
                                                                                     //
	MapWrapper.prototype.render = function () {                                         //
		function render() {                                                                //
			userLocation = this.state.currentRegion;                                          // 53
                                                                                     //
			// Map user markers in database to their own respective <MapMarkers /> tag.       //
			var myPlaces = this.markers().map(function (marker) {                             // 56
				var coords = _objectWithoutProperties(marker, []);                               // 56
                                                                                     //
				return React.createElement(MapMarkers, _extends({ key: marker._id                // 59
				}, coords));                                                                     // 60
			});                                                                               // 63
                                                                                     //
			if (userLocation) {                                                               // 65
				return React.createElement(                                                      // 66
					'div',                                                                          // 67
					{ className: 'mapWrapper' },                                                    // 67
					React.createElement(LatLngForm, null),                                          // 68
					React.createElement(                                                            // 69
						GoogleMap,                                                                     // 69
						{                                                                              // 69
							defaultCenter: this.props.center,                                             // 70
							center: userLocation,                                                         // 71
							defaultZoom: this.props.zoom,                                                 // 72
							options: this.createMapOptions,                                               // 73
							bootstrapURLKeys: { key: 'AIzaSyAh3cQ8hG1PN_ZLLC_GYP0zWhDSsYD4Mbk' } },       // 74
						myPlaces                                                                       // 76
					)                                                                               // 69
				);                                                                               // 67
			} else {                                                                          // 80
				return React.createElement(                                                      // 82
					'div',                                                                          // 83
					{ className: 'mapWrapper' },                                                    // 83
					React.createElement(                                                            // 84
						'h1',                                                                          // 84
						null,                                                                          // 84
						'Loading Map...'                                                               // 84
					),                                                                              // 84
					React.createElement(                                                            // 85
						'p',                                                                           // 85
						null,                                                                          // 85
						'Please allow for location access to view map.'                                // 85
					)                                                                               // 85
				);                                                                               // 83
			}                                                                                 // 88
		}                                                                                  // 89
                                                                                     //
		return render;                                                                     //
	}();                                                                                //
                                                                                     //
	return MapWrapper;                                                                  //
}(TrackerReact(Component));                                                          //
                                                                                     //
module.export("default",exports.default=(MapWrapper));                               //
                                                                                     //
                                                                                     //
MapWrapper.propTypes = {                                                             // 92
	center: PropTypes.any,                                                              // 93
	zoom: PropTypes.number                                                              // 94
};                                                                                   // 92
MapWrapper.defaultProps = {                                                          // 96
	center: [0, 0],                                                                     // 97
	zoom: 8                                                                             // 98
};                                                                                   // 96
///////////////////////////////////////////////////////////////////////////////////////

}]},"routing":{"routes.jsx":["react","react-mounter","../layout/MainLayout","../map/MapWrapper",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/routing/routes.jsx                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var React;module.import('react',{"default":function(v){React=v}});var mount;module.import('react-mounter',{"mount":function(v){mount=v}});var MainLayout;module.import('../layout/MainLayout',{"MainLayout":function(v){MainLayout=v}});var MapWrapper;module.import('../map/MapWrapper',{"default":function(v){MapWrapper=v}});
                                                                                     // 2
                                                                                     //
                                                                                     // 4
                                                                                     // 5
                                                                                     //
FlowRouter.route('/', {                                                              // 7
	action: function () {                                                               // 8
		function action() {                                                                // 7
			mount(MainLayout, {                                                               // 9
				content: React.createElement(MapWrapper, null)                                   // 10
			});                                                                               // 9
		}                                                                                  // 12
                                                                                     //
		return action;                                                                     // 7
	}()                                                                                 // 7
});                                                                                  // 7
///////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/layout/MainLayout.jsx");
require("./client/map/LatLngForm.jsx");
require("./client/map/MapMarkers.jsx");
require("./client/map/MapWrapper.jsx");
require("./client/routing/routes.jsx");