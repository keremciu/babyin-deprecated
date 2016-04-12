import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import school from '/lib/school.js';

export default function () {
  Meteor.methods({

    '_school.add'(data, _id) {

      let areas = school.getFields();
      const checker = {};
      areas.map(function (key) {
        if (data[key.name]) {
          checker[key.name] = key.type.class;
        }
      });

      check(data, checker);
      check(_id, String);
      data._id = _id;

      const doc = new school(data);
      doc.save();
    },

    '_school.update'(data, _id) {

      let doc = school.findOne(_id);
      let items = school.getFields();
      let fields = Object.keys(data);

      const checker = {};
      items.map(function (key) {
        if (data[key.name]) {
          checker[key.name] = key.type.class;
          doc[key.name] = data[key.name];
        }
      });

      check(data, checker);
      check(_id, String);

      doc.validate({ fields }, function (err) {
        if (!err) {
          doc.save({ environment: 'server' }, function () {
            // function(dif) { console.log(dif); }
          });
        }
      });

    },

    '_school.delete'(_id) {
      check(_id, String);
      let doc = school.findOne(_id);
      doc.softRemove();
    }
  });
}
