import {Meteor} from 'meteor/meteor';
import {Users} from '/imports/api/users/model.js';
Meteor.publish('allUsersNames',function(){
    return Users.find({}, {fields: {username: 1}});
});
