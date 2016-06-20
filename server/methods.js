Meteor.methods({
	addLocation(lat, lng) {
		Markers.insert({
			userLat: lat,
			userLng: lng
		});
	}
});
