import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_preschool.DELETE_ERROR');
  if (Meteor.subscribe('_preschool.single', _id).ready()) {
    const record = Collections._preschool.findOne(_id);
    if (record) {
      onData(null, {record, error});
    } else {
      // FlowRouter.go('/colors');
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._preschool.delete,
  clearErrors: actions._preschool.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
