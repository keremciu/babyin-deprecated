export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log ('actions._itemname.add data', data);
    const _id = Meteor.uuid();
    Meteor.call('_classroom.add', data, _id, (err) => {
      if (err) {
        return LocalState.set('_classroom.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/classrooms/`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._classroom.update _id', _id);
    // console.log ('actions._classroom.update data', data);

    Meteor.call('_classroom.update', data, _id, (err) => {
      if (err) {
        return LocalState.set('_classroom.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/classrooms/`);
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._classroom.delete _id', _id);
    // console.log ('actions._classroom.delete data', data);

    Meteor.call('_classroom.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_classroom.DELETE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/classrooms/`);
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_classroom.DELETE_ERROR', null);
    return LocalState.set('_classroom.SAVE_ERROR', null);
  }

};
