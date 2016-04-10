import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import school from '/lib/school.js';

export default function () {
  Meteor.methods({

    '_school.add'(data, _id) {
      check(data, {
        name: String,
        phone: String,
        website: String,
        email: String,
        address: String,
        capacity: String
      });
      check(_id, String);

      data._id = _id;

      // const object = {_id, data.title, data.content};
      const doc = new school(data);
      doc.save();
    },

    '_school.update'(data, _id) {
      check(data, {
        name: String,
        phone: String,
        website: String,
        email: String,
        address: String,
        capacity: String
      });
      check(_id, String);

      var doc = school.findOne(_id);

      const allowedFields = [ 'name','phone', 'email', 'website', 'address', 'capacity' ];
      allowedFields.forEach(key => (doc[key] = data[key]) );

      doc.validate({ fields: allowedFields }, function (err) {
        if (!err) {
          doc.save({ environment: 'server' }, function () {
            // function(dif) { console.log(dif); }
          });
        }
      });

    },

    '_school.delete'(_id) {
      check(_id, String);
      let record = school.findOne(_id);
      record.remove();
    }
  });
}
