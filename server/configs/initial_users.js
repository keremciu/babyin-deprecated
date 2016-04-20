import {Meteor} from 'meteor/meteor';

export default () => {
  if (Meteor.users.find().count() === 0 ) {
    const user = Accounts.createUser({
      email: 'kerem@ritmix.org',
      password: '65446544',
      firstName: 'Kerem',
      lastName: 'Sevencan',
      language: 'tr'
    });

    Roles.setUserRoles(user, 'admin');
  }
};
