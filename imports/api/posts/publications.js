import {Meteor} from 'meteor/meteor';
import {Posts} from '/imports/api/posts/model.js';

Meteor.publish('allPosts',function(){
    return Posts.find();
});
