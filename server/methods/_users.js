import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// import _ from 'lodash';

Accounts.onCreateUser(function (options, user) {
  // Use provided profile in options, or create an empty profile object
  user.profile = options.profile || {};

  // Assigns the first and last names to the newly created user object
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;
  user.profile.language = options.language;

  // Returns the user object
  return user;
});

export default function () {
  Meteor.methods({

    '_users.add'(data) {

      check(data, {
        email: String,
        firstName: String,
        lastName: String,
        role: String,
        language: String
      });

      data.password = 'test1234';

      const _idNew = Accounts.createUser({
        email: data.email,
        password: data.password,
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

      let record = Meteor.users.findOne(_id);
      // const allowedFields = ['profile.firstName'];
      // data.forEach(key => record.set(key,data[key]) );

      record.profile.set('firstName', data.firstName);
      record.profile.set('lastName', data.lastName);
      record.profile.set('language', data.language);
      record.emails[0].set('address', data.email);
      record.save();

      Roles.removeUsersFromRoles(_id, [ 'admin', 'director', 'teacher', 'family' ]);
      Roles.setUserRoles(_id, data.role);

    },

    '_users.delete'(_id) {
      check(_id, String);
      //  console.log('_users.delete _id', _id);
      if (Meteor.userId() !== _id) {
        let record = Meteor.users.findOne(_id);
        record.remove();
      }
    }
  });
}
