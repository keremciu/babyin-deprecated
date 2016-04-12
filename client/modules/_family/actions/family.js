export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    const _id = Meteor.uuid();

    Meteor.call('_family.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_family.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/familys/`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {

    // console.log ('actions._family.update _id', _id);
    // console.log ('actions._family.update data', data);
    Meteor.call('_family.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_classroom.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/familys/`);
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._family.delete _id', _id);
    // console.log ('actions._family.delete data', data);

    Meteor.call('_family.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_family.DELETE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/familys/`);
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_family.DELETE_ERROR', null);
    return LocalState.set('_family.SAVE_ERROR', null);
  }

};
