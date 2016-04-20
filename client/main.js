import {createApp} from 'mantra-core';
import initContext from './configs/context';
import _ from 'lodash';

// import modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';
import _usersModule from './modules/_users';
import _colorsModule from './modules/_colors';
import _schoolModule from './modules/_school';
import _classroomModule from './modules/_classroom';
import _familyModule from './modules/_family';

// get logged user language information
// const loggedIn = Meteor.userId() || false;
const user = Meteor.users.findOne(Meteor.userId());
const language = _.get(user, 'profile.language', null);

// browser language
function getLang() {
  if (typeof navigator.languages !== 'undefined') {
    return navigator.languages[0];
  }

  return navigator.language || navigator.browserLanguage;
}

if (language === null) {
  TAPi18n.setLanguage(getLang());
} else {
  // set the language of user
  TAPi18n.setLanguage(language);
}

// init context
const context = initContext();

// create app
const app = createApp(context);

// load modules
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.loadModule(_usersModule);
app.loadModule(_colorsModule);
app.loadModule(_schoolModule);
app.loadModule(_classroomModule);

// init app
app.loadModule(_familyModule);
app.init();
