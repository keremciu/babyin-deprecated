import {_family} from '/lib/collections';

// TODO needs family views be done

const Model = Astro.Class.create({
  name: '_family',
  collection: _family,
  fields: {
    name: String
  },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
});

export default Model;
