import {_student} from '/lib/collections';

const Model = Astro.Class.create({
  name: '_student',
  collection: _student,
  fields: {
    userId: String,
    family: String,
    school: String,
    classroom: String,
    gender: String,
    birthday: String,
    aboutme: String,
    picture: String,
    createdAt: Date
  },
  // relations: {
  //   preschool: {
  //     type: 'one',
  //     class: '_preschool',
  //     local: 'schoolId',
  //     foreign: '_id'
  //   }
  // }
});

export default Model;
