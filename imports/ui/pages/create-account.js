import {Users} from '/imports/api/users/model.js';
import {AutoForm} from 'meteor/aldeed:autoform';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';

import '/imports/ui/pages/create-account.html';
import {UserSchema} from '../../api/users/model';

Template.createAccount.helpers({
    userSchema() {
        return UserSchema;
    }
});

AutoForm.hooks({
    formCreateAccount: {
        onSubmit(user) {
            console.log(user);

            Users.insert(user, (err) => {
                if (err) {
                    alert(err.reason);

                    this.done(new Error("Submission failed"));
                } else {
                    FlowRouter.go('home');
                }
            });

            return false;
        }
    }
});