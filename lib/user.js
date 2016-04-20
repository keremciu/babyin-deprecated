import { Class } from 'meteor/jagi:astronomy';
import _ from 'lodash';

export const Phone = Class.create({
  name: 'Phone',
  fields: {
    name: {
      type: String,
    },
    number: {
      type: String,
    },
    uuid: {
      type: String,
    },
  }
});

export const Email = Class.create({
  name: 'Email',
  fields: {
    address: {
      type: String,
    },
    verified: {
      type: String,
    }
  }
});

export const UserProfile = Class.create({
  name: 'UserProfile',
  fields: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    language: {
      type: String,
    },
    // phones: [ Phone ],
  }
});

const User = Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: [ Email ],
    profile: UserProfile,
    // _iss: {
    //   type: Boolean
    // },
    // _isa: {
    //   type: Boolean
    // }
  },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ],
  methods: {
    firstEmail() {
      return _.get(this, 'emails[0].address', null);
    },
    fullName() {
      return this.profile.firstName + ' ' + this.profile.lastName;
    },
    getRole() {
      return Roles.getRolesForUser(this._id)[0];
    }
  },
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: Object
    }
  });
}

export default User;
