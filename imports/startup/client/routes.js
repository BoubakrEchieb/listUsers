import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/app-body.js';
import '/imports/ui/pages/login.js';
import '/imports/ui/pages/create-account.js';
import '/imports/ui/pages/home.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('appBody', {main: 'home'});
    }
});
FlowRouter.route('/createAccount', {
    name: 'createAccount',
    action() {
        BlazeLayout.render("createAccount");
    }
});