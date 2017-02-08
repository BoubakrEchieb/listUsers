import {AutoForm} from 'meteor/aldeed:autoform';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {userSchema} from '../../api/users/model'

import '/imports/ui/pages/create-account.html';

Template.createAccount.helpers({
    userSchema() {
        return userSchema;
    }
});

AutoForm.hooks({
    formCreateAccount: {
        onSubmit(user) {
            Meteor.call('addNewUser', user, (err) => {
                if (err) {
                    toastr.error('Failed to register new user','failed!');
                    this.done(new Error('Submission failed'));
                } else {
                    toastr.success('Registered with success !', 'welcome');
                    FlowRouter.go('home');
                }
            });
            return false;
        }
    }
});