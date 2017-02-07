import {Accounts} from 'meteor/accounts-base'
import {FlowRouter} from 'meteor/kadira:flow-router';

Meteor.methods({
    //add new user
   addNewUser(user,callback) {
       console.log( newUser);
       const newUser = {
           username: user.username,
           email: user.emails[0].address,
           password: user.password
       }
       Accounts.createUser(newUser, callback);
   }
});