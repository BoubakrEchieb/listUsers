import {Users} from '/imports/api/users/model.js';

Meteor.methods({
    addUser(user) {
        return Users.insert(user, this.isSimulation);
    }
});