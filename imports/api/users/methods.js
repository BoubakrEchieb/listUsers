import {Accounts} from 'meteor/accounts-base'
import {FlowRouter} from 'meteor/kadira:flow-router';

Meteor.methods({
    //add new user
   addNewUser(user) {
       console.log( newUser);
       const newUser = {
           username: user.username,
           email: user.email,
           password: user.password
       }
       Accounts.createUser(newUser);
   }
});