import { Users } from '/collections/users.js';

Meteor.publish('publishUsers', function () {
    return Users.find({},{
        fields:{
            username: 1,
            email: 1
        }
    })
});
