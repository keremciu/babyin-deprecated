import {_family} from '/lib/collections';

const Model = Astro.Class.create({
  name: '_family',
  collection: _family,
  fields: {
    name: String,
  },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
});

export default Model;
