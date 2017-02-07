import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const postSchema = new SimpleSchema({
    authorId:{
        type: String,
        optional: false,
    },
    content: {
        type:String,
        optional: false,
    },
    createdAt: {
        type: Date,
        autoValue: function () {
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
export const Posts = new Meteor.Collection('posts');