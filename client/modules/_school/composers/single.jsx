import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import school from '/lib/school.js';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, LocalState} = context();
  const error = LocalState.get('_school.DELETE_ERROR');

  if (Meteor.subscribe('_school.single', _id).ready()) {
    const record = school.findOne(_id);
    if (record) {
      onData(null, {...record, error});
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._school.delete,
  clearErrors: actions._school.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
