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
  // relations: {
  //   classrooms: {
  //     type: 'many',
  //     class: 'classroom',
  //     local: '_id',
  //     foreign: 'schoolId'
  //   }
  // },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
});

export default Model;
