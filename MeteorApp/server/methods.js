Meteor.methods({
	addLocation(lat, lng) {
		Markers.insert({
			lat: Number(lat),
			lng: Number(lng)
		});
	}
});
