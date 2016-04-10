import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import User from '/lib/user.js';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if (Meteor.subscribe('users.collection').ready()) {
    const collection = User.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps()
  )(component);
