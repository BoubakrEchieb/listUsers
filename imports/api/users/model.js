import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


export const UserSchema = new SimpleSchema({
    username: {
        type: String,
        optional: false,
        label: 'Username:'
    },
    email: {
        type: String,
        optional: false,
        label: 'Email:',
    },
    password: {
        type: String,
        optional: false,
        label: 'Password:',
        autoform: {
            afFieldInput:{
                type: 'password'
            }
        }
    },
    confirm: {
        type: String,
        optional: false,
        label: 'Confirm password',
        autoform: {
            afFieldInput:{
                type: 'password'
            }
        },
        custom(){
            if(this.value !== this.field('password').value){
                return new Error('verify password');
            }
        }
    }
});

export const Users = new Mongo.Collection('users');

const insertUser = Users.insert;
Users.insert = function (user, simulationOrCallback) {
    let simulation, callback;
    if (typeof simulationOrCallback == 'boolean') {
        simulation = simulationOrCallback;
    } else {
        callback = simulationOrCallback;
    }

    if (Meteor.isServer || simulation) {
        userSchema.validate(user);

        return insertUser.apply(this, [user, callback]);

    } else {
        Meteor.call('addUser', user, callback);
    }
};


Users.allow({
    insert() {
        return false;
    },
    remove() {
        return false;
    },
    update() {
        return false;
    }
});

