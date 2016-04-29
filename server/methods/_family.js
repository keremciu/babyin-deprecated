  import {Meteor} from 'meteor/meteor';
  import {check} from 'meteor/check';
  import family from '/lib/family.js';

  export default function () {
    Meteor.methods({

      '_family.add'(data, _id) {

        let areas = family.getFields();
        const checker = {};
        areas.map(function (key) {
          if (data[key.name]) {
            checker[key.name] = key.type.class;
          }
        });

        check(data, checker);
        check(_id, String);
        data._id = _id;

        const doc = new family(data);
        doc.save();
      },

      '_family.update'(data, _id) {

        let doc = family.findOne(_id);
        let items = family.getFields();
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

      '_family.delete'(_id) {
        check(_id, String);
        let doc = family.findOne(_id);
        doc.softRemove();
      }
    });
};
