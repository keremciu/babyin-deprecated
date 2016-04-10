import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Collect from '/lib/user.js';
import { Behavior } from 'meteor/jagi:astronomy';
// import _ from 'lodash';

Accounts.onCreateUser(function (options, user) {
  // Use provided profile in options, or create an empty profile object
  user.profile = options.profile || {};

  // Assigns the first and last names to the newly created user object
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;
  user.profile.language = options.language;

  Behavior.get('userstamp').definition.setCreatedBy(user);

  // Returns the user object
  return user;
});

export default function () {
  Meteor.methods({

    '_users.add'(data) {

      check(data, {
        firstName: String,
        lastName: String,
        email: String,
        role: String,
        language: String,
      });

      data.password = 'test1234';

      const _idNew = Accounts.createUser({
        email: data.email,
        password: data.password,
        profile: data.profile,
        firstName: data.firstName,
        lastName: data.lastName,
        language: data.language
      });

      // console.log('new user created with _id_new', _id_new);
      Roles.setUserRoles(_idNew, data.role);

      return { _idNew };

    },

    '_users.update'(data, _id) {
      check(data, {
        firstName: String,
        lastName: String,
        email: String,
        role: String,
        language: String
      });
      check(_id, String);

      var doc = Collect.findOne(_id);

      var profile = {
        firstName: data.firstName,
        lastName: data.lastName,
        language: data.language,
      };

      let emails = [];
      emails[0] = {address: data.email, verified: 'no'};

      doc.emails = emails;
      doc.profile = profile;

      doc.save({ environment: 'server' }, function () {
        // function(dif) { console.log(dif); }
      });

      Roles.removeUsersFromRoles(_id, [ 'admin', 'director', 'teacher', 'family' ]);
      Roles.setUserRoles(_id, data.role);

    },

    '_users.delete'(_id) {
      check(_id, String);
      //  console.log('_users.delete _id', _id);

      let record = Collect.findOne(_id);
      record.remove();
      // if (Meteor.userId() !== _id) {
      //
      // }
    }
  });
}
