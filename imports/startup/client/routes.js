import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Posts} from '/imports/api/posts/model.js';

import '/imports/ui/layouts/app-body.js';
import '/imports/ui/pages/login.js';
import '/imports/ui/pages/create-account.js';
import '/imports/ui/pages/home.js';
import '/imports/ui/layouts/menu.js';

import '/imports/ui/stylesheets/main.css';



//home page route
FlowRouter.route('/', {
    name: 'home',
    action() {
        let posts = Posts.find();
        BlazeLayout.render('appBody', {main: 'home', listPosts: posts});
    }
});

//create account route
FlowRouter.route('/createAccount', {
    name: 'createAccount',
    action() {
        BlazeLayout.render('appBody', {main: 'createAccount', createAccount: true});
    }
});