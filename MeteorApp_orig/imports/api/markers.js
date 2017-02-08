import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Markers = new Mongo.Collection('markers');

if(Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('markers', function markersPublication() {
    return Markers.find({
      $or: [
        {private: {$ne: true}},
        {owner: this.userId},
      ],
    });
  });
}

Meteor.methods({
  'coord.insert'(lat, lng) {
    console.log("'coord.insert' method activated!");
    check(lat, Number);
    check(lng, Number);

    // Make sure the user is logged in before inserting a task
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Markers.insert({
      owner: this.userId,
      email: Meteor.users.findOne(this.userId).emails[0].address,
      coords: {
        LatCoord: lat,
        LngCoord: lng,
      },
    });
  },
});
