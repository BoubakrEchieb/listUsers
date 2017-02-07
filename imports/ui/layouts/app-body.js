import {Template} from 'meteor/templating';

import './app-body.html';

Template.appBody.helpers({
    currentUser() {
        console.log(Meteor.userId());
        return Meteor.userId();
    }
});