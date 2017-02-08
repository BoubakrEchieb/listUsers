import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const commentSchema = new SimpleSchema({
    authorId: {
        type: String,
        optional: false,
    },
    content: {
        type: String,
        optional: false,
        autoform: {
            label: false
        }
    },
    createdAt: {
        type: Date,
        autoValue() {
            if (this.isInsert) {
                return new Date;
            } else {
                this.unset();
            }
        },
        autoform: {
            omit: true
        }
    }
});

export const postSchema = new SimpleSchema({
    authorId:{
        type: String,
        optional: false,
        autoform: {
            omit: true
        }
    },
    title: {
        type: String,
        optional: false
    },
    content: {
        type:String,
        optional: false,
        autoform: {
            afFieldInput: {
                type: 'textarea',
                placeholder: 'what\s up !?'
            },
            label: false
        }
    },
    createdAt: {
        type: Date,
        optional: false,
        autoValue() {
            if (this.isInsert) {
                return new Date;
            } else {
                this.unset();
            }
        },
        autoform: {
            omit: true
        }
    },
    comments: {
        type: [commentSchema],
        optional: true
    }
});
export const Posts = new Meteor.Collection('posts');
Posts.attachSchema(postSchema);
Posts.allow({
    insert() {
        return false;
    },
    update() {
        return false
    },
    remove() {
        return false;
    }
});

Posts.deny({
    insert() {
        return false;
    },
    update() {
        return false
    },
    remove() {
        return false;
    }
});