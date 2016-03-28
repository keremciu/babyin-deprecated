import {_preschool} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    '_preschool.add'(data, _id) {
      check(data, {
        name: String,
        phone: String,
        website: String,
        email: String,
        address: String,
        capacity: String
      });
      check(_id, String);

      // console.log('_preschool.add data', data);

      data._id = _id;
      data.createdAt = new Date();
      // const object = {_id, data.title, data.content, createdAt};
      _preschool.insert(data);
    },

    '_preschool.update'(data, _id) {
      check(data, {
        name: String,
        phone: String,
        website: String,
        email: String,
        address: String,
        capacity: String
      });
      check(_id, String);

      let record = _preschool.findOne(_id);
      const allowedFields = [ 'name','phone', 'email', 'website', 'address', 'capacity' ];
      allowedFields.forEach(key => record.set(key,data[key]) );
      record.save(allowedFields);

    },

    '_preschool.delete'(_id) {
      check(_id, String);
      //  console.log('_colors.delete _id', _id);
      let record = _preschool.findOne(_id);
      record.remove();
    }
  });
}
