export default {

  // create
  add({Meteor, LocalState, FlowRouter}, data) {
    // console.log ('actions._itemname.add data', data);
    const _id = Meteor.uuid();
    Meteor.call('_preschool.add', data, _id, (err) => {
      if (err) {
        console.log(err);
        return LocalState.set('_preschool.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/preschools/`);
  },

  // update
  update({Meteor, LocalState, FlowRouter}, data, _id) {
    // console.log ('actions._preschool.update _id', _id);
    // console.log ('actions._preschool.update data', data);

    Meteor.call('_preschool.update', data, _id, (err) => {
      if (err) {
        console.log(err);
        return LocalState.set('_preschool.SAVE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/preschools/`);
  },

  delete({Meteor, LocalState, FlowRouter}, _id) {
    // console.log ('actions._preschool.delete _id', _id);
    // console.log ('actions._preschool.delete data', data);

    Meteor.call('_preschool.delete', _id, (err) => {
      if (err) {
        return LocalState.set('_preschool.DELETE_ERROR', err.message);
      }
    });
    
    FlowRouter.go(`/preschools/`);
  },

  // clearError
  clearErrors({LocalState}) {
    LocalState.set('_preschool.DELETE_ERROR', null);
    return LocalState.set('_preschool.SAVE_ERROR', null);
  }

};
