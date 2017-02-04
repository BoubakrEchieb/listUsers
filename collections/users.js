if (!Meteor.users){
    Users = new Meteor.Collection('users');
}

Users.allow({
    'insert'(){
        return true;
    },
    'remove'(){
        return true;
    },
    'update'(){
        return true;
    }
});
Users.attachSchema(new SimpleSchema({
    username: {
        type: String,
        max: 200,
        label: "Username : ",
        optional: false
    },
    email: {
        type: String,
        optional: false,
        label: "Email : "
    }
}));
export var Users;