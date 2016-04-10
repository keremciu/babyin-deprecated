import {_classroom} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('_classroom.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, studentCount: 1},
      limit: 50
    };

    return _classroom.find(selector, options);
  });

  Meteor.publish('_classroom.single', function (_id) {
    check( _id, String);
    const selector = {_id};
    return _classroom.find(selector);
  });
}
