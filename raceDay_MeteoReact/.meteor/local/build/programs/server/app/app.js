var require = meteorInstall({"server":{"markers.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/markers.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Markers = new Mongo.Collection("markers");                           // 1
                                                                     //
Meteor.publish("userMarkers", function () {                          // 3
	return Markers.find();                                              // 4
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

},"methods.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({                                                     // 1
	addLocation: function addLocation(lat, lng) {                       // 2
		Markers.insert({                                                   // 3
			lat: Number(lat),                                                 // 4
			lng: Number(lng)                                                  // 5
		});                                                                // 3
	}                                                                   // 7
});                                                                  // 1
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./server/markers.js");
require("./server/methods.js");
//# sourceMappingURL=app.js.map
