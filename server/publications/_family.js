import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import family from '/lib/family.js';

export default function () {
  Meteor.publish('_family.list', function () {
    const selector = {};
    const options = {
      limit: 50
    };

    return family.find(selector, options);
  });

  Meteor.publish('_family.single', function (_id) {
    check(_id, String);
    const selector = {_id};
    return family.find(selector);
  });
}