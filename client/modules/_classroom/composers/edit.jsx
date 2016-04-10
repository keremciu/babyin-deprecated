import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

import {singleComposer} from './single.jsx';

export const editComposer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_classroom.SAVING_ERROR');

  if (Meteor.subscribe('_school.list').ready()) {
    const schools = Collections._school.find().fetch();
    onData(null, {schools, error});
  }

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  submitAction: actions._classroom.update,
  clearErrors: actions._classroom.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    composeWithTracker(editComposer),
    useDeps(depsMapper)
  )(component);
