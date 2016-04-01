import {_preschool} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('_preschool.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, capacity: 1},
      sort: {createdAt: -1},
      limit: 50
    };

    return _preschool.find(selector, options);
  });

  Meteor.publish('_preschool.single', function (_id) {
    check(_id, String);
    const selector = {_id};
    return _preschool.find(selector);
  });
}
