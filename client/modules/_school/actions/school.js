export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log ('actions._itemname.add data', data);
    const _id = Meteor.uuid();
    Meteor.call('_school.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_school.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/schools/`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._school.update _id', _id);
    // console.log ('actions._school.update data', data);

    Meteor.call('_school.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_school.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/schools/`);
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._school.delete _id', _id);
    // console.log ('actions._school.delete data', data);

    Meteor.call('_school.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_school.DELETE_ERROR', err.message);
      }
    });
    FlowRouter.go(`/schools/`);
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_school.DELETE_ERROR', null);
    return LocalState.set('_school.SAVE_ERROR', null);
  }

};
