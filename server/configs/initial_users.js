import {Meteor} from 'meteor/meteor';

export default () => {
  if (Meteor.users.find().count() === 0 ) {
    const _defaultUser = Accounts.createUser({
      email: 'kerem@ritmix.org',
      password: '65446544',
      firstName: 'Kerem',
      lastName: 'Sevencan',
      language: 'tr'
    });

    Roles.setUserRoles(_defaultUser, 'admin');
  }
};
