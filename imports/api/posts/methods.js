import {Meteor} from 'meteor/meteor';
import {postSchema} from '/imports/api/posts/model.js';
import {Posts} from '/imports/api/posts/model.js';


Meteor.methods({
    //insert new post
    insertPost(titleAndContent) {
        const authorId = Meteor.userId();
        console.log('insert');
        Posts.insert({
            authorId: authorId,
            title: titleAndContent.title,
            content: titleAndContent.content
        });
    }
    //remove post
    //update post
});