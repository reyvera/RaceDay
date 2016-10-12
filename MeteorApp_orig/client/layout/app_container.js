import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {MainLayout} from './MainLayout';

export default createContainer(() => {
	const signedIn = Meteor.user() !== null

	return {
		signedIn
	}
}, MainLayout);
