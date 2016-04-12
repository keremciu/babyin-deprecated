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
  },
  behaviors: [ 'softremove', 'timestamp', 'userstamp' ]
  // relations: {
  //   family: {
  //     type: 'one',
  //     class: '_family',
  //     local: 'schoolId',
  //     foreign: '_id'
  //   }
  // }
});

export default Model;
