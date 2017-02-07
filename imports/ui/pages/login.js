import {Template} from 'meteor/templating';

import '/imports/ui/pages/login.html'

Template.login.events({
    'submit #formLogin'(event,template) {
        event.preventDefault();
        let email = template.$('#email').val();
        let password = template.$('#password').val();

        Meteor.loginWithPassword({email: email}, password, function(err) {
            if (err) {
                toastr.error('could\'nt login!','faild');
            } else {
                toastr.success('welcome back !');
            }
        });
    }
});