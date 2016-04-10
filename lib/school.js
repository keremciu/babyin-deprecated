import {_school} from '/lib/collections';

const Model = Astro.Class.create({
  name: '_school',
  collection: _school,
  fields: {
    name: String,
    phone: String,
    website: String,
    email: String,
    address: String,
    capacity: String
  },
  relations: {
    classrooms: {
      type: 'many',
      class: 'classroom',
      local: '_id',
      foreign: 'schoolId'
    }
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    },
    userstamp: {
      hasCreatedByField: true,
      createdByFieldName: 'createdBy',
      hasUpdatedByField: true,
      updatedByFieldName: 'updatedBy'
    },
  }
});

export default Model;
