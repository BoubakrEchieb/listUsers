import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    //add new user
   addNewUser(user) {
       const newUser = {
           username: user.username,
           email: user.email,
           password: user.password
       };
       Accounts.createUser(newUser);
   }
});