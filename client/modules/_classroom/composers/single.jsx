import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_classroom.DELETE_ERROR');
  if (Meteor.subscribe('_classroom.single', _id).ready()) {
    const record = Collections._classroom.findOne(_id);
    if (record) {
      console.log(record);
      onData(null, {...record, error});
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._classroom.delete,
  clearErrors: actions._classroom.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
