import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import _ from 'lodash';
import User from '/lib/user.js';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, LocalState} = context();
  const error = LocalState.get('_users.DELETE_ERROR');
  if (Meteor.subscribe('users.single', _id).ready()) {
    const user = User.findOne(_id);
    const email = user.firstEmail();
    // console.log('composer for single user', user);
    onData(null, {...user.profile, user, email, error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};


export const depsMapper = (context, actions) => ({
  deleteAction: actions._users.delete,
  clearErrors: actions._users.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
