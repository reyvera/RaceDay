Markers = new Mongo.Collection("markers");

Meteor.publish("userMarkers", function() {
	return Markers.find();
});
