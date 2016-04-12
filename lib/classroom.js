import {_classroom} from '/lib/collections';

// TODO change with new astro models

const Model = Astro.Class.create({
  name: '_classroom',
  collection: _classroom,
  fields: {
    name: String,
    description: String,
    studentCount: String,
    schoolId: String,
    picture: String,
  },
  // relations: {
  //   preschool: {
  //     type: 'one',
  //     class: '_preschool',
  //     local: 'schoolId',
  //     foreign: '_id'
  //   }
  // },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
});

export default Model;
