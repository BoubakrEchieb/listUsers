import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {postSchema} from '/imports/api/posts/model.js';
import {AutoForm} from 'meteor/aldeed:autoform';
import {Posts} from '/imports/api/posts/model.js';
import {Users} from '/imports/api/users/model.js'

import '/imports/ui/pages/home.html';

Template.home.onCreated(function () {
    this.subscribe('allPosts');
    this.subscribe('allUsersNames');
});

//Helpers
Template.home.helpers({
    postSchema() {
        return postSchema;
    },
    inputTypeValue() {
        console.log('reexec');
        const postId = Tracker.nonreactive(function () {
            return FlowRouter.getParam('postId');
        });
        return Template.instance().inputType.get();
    },
    getListPost() {
        let listPosts = [];
        Posts.find({}, {fields: {authorId: 1, title: 1, content: 1}}).forEach(function (post) {
            const authorId = post.authorId;
            const author = Users.findOne({_id: authorId});
            let numberOfComments = 0;
            if (post.comments) {
                 numberOfComments = post.comments.length;
            }
            const item = {
                authorName: author.username,
                title: post.title,
                content: post.content,
                numberOfComments: numberOfComments
            };
            listPosts.push(item);
        });
        return listPosts.reverse();
    }

});

//events
Template.home.events({
    'submit #formInsertPost'(event, template) {
        event.preventDefault();
        const contentInput = template.$('#inputContent');
        const titleInput = template.$('#inputTitle');
        const content = contentInput.val();
        const title = titleInput.val();
        var titleAndContent = {
            title: title,
            content: content
        };
        let message = '';
        if (title != ''  && content != '') {
                Meteor.call('insertPost', titleAndContent, function(err) {
                    if (err) {
                        console.log(err.reason);
                        toastr.error('Error while updating post');
                    } else {
                        toastr.success('Post updated successfully');
                        contentInput.val('');
                        titleInput.val('');
                    }
                });
        } else {
            message += 'Title or content input is empty !';
            toastr.warning(message);
        }
        return false;
    }

});