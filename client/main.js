import { Template } from 'meteor/templating';
import { Users } from '/collections/users.js';

import './main.html';

//insert new User
Template.insertUser.events({
    'submit #insertForm'(event,template){
        event.preventDefault();
        let username = template.$('#username').val();
        let email = template.$('#email').val();
        let password = template.$('#password').val();
        let user = {
            username: username,
            email: email,
            password: password,
        };
        Users.insert(user,function (err) {
            if (err) {
                alert(err.reason);
            }
        });

        template.$('#username').val('');
        template.$('#email').val('');
        template.$('#password').val('');

        return false;
    }
});
//Show all users
Template.showUsers.helpers({
  'showAllUsers'(){
    return Users.find();
  }
});
//remove all users
Template.showUsers.events({
    'click #remove-all'(event,template){
        Users.find().forEach(function (user) {
            Users.remove(user._id);
        });
    }
});
//Remove user
Template.showUsers.events({
    'click #btn-remove'(event,template){
       Users.remove(this._id);
    }
});
//update user infos
Template.showUsers.events({
    'submit #update-form'(event,template){
        event.preventDefault();
        let newUsername = template.$('#new-username').val();
        let newEmail = template.$('#new-email').val();
        let _id = this._id;
        if (newUsername != '' ) {
            Users.update(_id, {$set:{username: newUsername}})
        }
        if (newEmail != '') {
            Users.update(_id, {$set:{email: newEmail}})
        }
        template.$('#new-username').val('');
        template.$('#new-email').val('');
        template.$('#toggle-btn').click();
        return false;
    }
});


