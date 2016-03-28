import {_classroom} from '/lib/collections';

const Model = Astro.Class({
  name: '_classroom',
  collection: _classroom,
  fields: {
    name : 'string',
    description : 'string',
    count : 'number',
    schoolId: 'string'
  },
  relations: {
    preschool: {
      type: 'one',
      class: '_preschool',
      local: 'schoolId',
      foreign: '_id'
    }
  }
});

export default Model;
