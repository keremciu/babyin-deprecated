import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import school from '/lib/school.js';

export default function () {
  Meteor.publish('_school.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, capacity: 1},
      limit: 50
    };

    return school.find(selector, options);
  });

  Meteor.publish('_school.single', function (_id) {
    check(_id, String);
    const selector = {_id};
    return school.find(selector);
  });
}
