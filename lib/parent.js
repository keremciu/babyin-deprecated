import {_parent} from '/lib/collections';

const Model = Astro.Class.create({
  name: '_parent',
  collection: _parent,
  fields: {
    userId: String,
    family: String,
    name: String,
  },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
});

export default Model;
