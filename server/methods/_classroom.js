import {_classroom} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    '_classroom.add'(data, _id) {
      check(data, {
        name: String,
        description: String,
        studentCount: String,
        schoolId: String
      });
      check(_id, String);

      data._id = _id;

      _classroom.insert(data);
    },

    '_classroom.update'(data, _id) {
      check(data, {
        name: String,
        description: String,
        studentCount: String,
        schoolId: String
      });
      check(_id, String);

      let record = _classroom.findOne(_id);
      const allowedFields = [ 'name','description', 'studentCount', 'schoolId' ];
      allowedFields.forEach(key => record.set(key,data[key]) );
      record.save(allowedFields);

    },

    '_classroom.delete'(_id) {
      check(_id, String);
      // console.log('_classroom.delete _id', _id);
      let record = _classroom.findOne(_id);
      // soft remove is the default delete function.
      record.softRemove();
      // if you need to delete exactly this record. you need to use this: record.remove();
    }
  });
}
