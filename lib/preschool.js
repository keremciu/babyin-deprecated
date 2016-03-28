import {_preschool} from '/lib/collections';

const Model = Astro.Class({
  name: '_preschool',
  collection: _preschool,
  fields: {
    name: 'string',
    phone: 'string',
    website: 'string',
    email: 'string',
    address: 'string',
    capacity: 'string',
    createdAt: 'date'
  },
  relations: {
    classrooms: {
      type: 'many',
      class: 'classroom',
      local: '_id',
      foreign: 'schoolId'
    }
  }
});

export default Model;
