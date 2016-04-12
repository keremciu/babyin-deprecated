import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import family from '/lib/family.js';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, LocalState} = context();
  const error = LocalState.get('_family.DELETE_ERROR');

  if (Meteor.subscribe('_family.single', _id).ready()) {
    const record = family.findOne(_id);
    if (record) {
      onData(null, {...record, error});
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions.family.delete,
  clearErrors: actions.family.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
