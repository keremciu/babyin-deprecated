import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import classroom from '/lib/classroom.js';

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
      data.picture = '';

      const doc = new classroom(data);
      doc.save();
    },

    '_classroom.update'(data, _id) {
      check(data, {
        name: String,
        description: String,
        studentCount: String,
        schoolId: String
      });
      check(_id, String);

      let doc = classroom.findOne(_id);

      data.picture = '';

      const allowedFields = [ 'name','description', 'studentCount', 'schoolId', 'picture' ];
      allowedFields.forEach(key => (doc[key] = data[key]) );

      doc.validate({ fields: allowedFields }, function (err) {
        if (!err) {
          doc.save({ environment: 'server' }, function () {
            // function(dif) { console.log(dif); }
          });
        }
      });

    },

    '_classroom.delete'(_id) {
      check(_id, String);
      // console.log('_classroom.delete _id', _id);
      let record = classroom.findOne(_id);
      // soft remove is the default delete function.
      record.softRemove();
      // if you need to delete exactly this record. you need to use this: record.remove();
    }
  });
}
