import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_family.list').ready()) {
    const collection = Collections._family.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
