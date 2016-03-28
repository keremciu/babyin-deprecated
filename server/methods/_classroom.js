import {_classroom} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    '_classroom.add'(data, _id) {
      check(data, {
        name: String,
        description: String,
        count: Number,
        schoolId: String
      });
      check(_id, String);

      // console.log('_classroom.add data', data);

      data._id = _id;
      data.createdAt = new Date();
      // const object = {_id, data.title, data.content, createdAt};
      _classroom.insert(data);
    },

    '_classroom.update'(data, _id) {
      check(data, {
        name: String,
        description: String,
        count: Number,
        schoolId: String
      });
      check(_id, String);

      let record = _classroom.findOne(_id);
      const allowedFields = [ 'name','description', 'count', 'schoolId' ];
      allowedFields.forEach(key => record.set(key,data[key]) );
      record.save(allowedFields);

    },

    '_classroom.delete'(_id) {
      check(_id, String);
      //  console.log('_classroom.delete _id', _id);
      let record = _classroom.findOne(_id);
      record.remove();
    }
  });
}
