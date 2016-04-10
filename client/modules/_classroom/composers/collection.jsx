import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_classroom.list').ready()) {
    const collection = Collections._classroom.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
