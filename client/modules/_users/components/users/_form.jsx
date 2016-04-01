import React from 'react';
import { Form } from 'formsy-react';

const FMUI = require('formsy-material-ui');
const { FormsyText, FormsySelect } = FMUI;
const UI = require('material-ui');
const { MenuItem, FloatingActionButton, Toolbar, ToolbarGroup, ToolbarTitle } = UI;

// material ui svg icons
import DoneIcon from 'material-ui/lib/svg-icons/action/done';

export default React.createClass({

  getInitialState() {
    return {canSubmit: false};
  },

  enableButton() {
    this.setState({canSubmit: true});
  },

  disableButton() {
    this.setState({canSubmit: false});
  },

  submitForm(model) {
    // Submit your validated form
    // console.log("Model: ", model)

    // check this item new or old
    // if this item is old, it has a "_id" prop.
    if (this.props._id) {
      this.props.submitAction(model, this.props._id);
    } else {
      this.props.submitAction(model);
    }
  },
  render() {

    const {
      _id,
      firstName,
      lastName,
      email,
      language
    } = this.props;
    const roles = _id ? Roles.getRolesForUser(_id)[0] : '';
    const title = _id ? 'Edit: ' + email : 'Add new';

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text={title} />
          </ToolbarGroup>
        </Toolbar>
        <Formsy.Form
          className="form"
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.submitForm}>
          <FormsyText
            name='firstName'
            hintText="What is your name?"
            floatingLabelText="Firstname"
            value={firstName}
            required
            fullWidth/>
          <FormsyText
            name='lastName'
            hintText="What is your last name?"
            floatingLabelText="Lastname"
            value={lastName}
            required
            fullWidth/>
          <FormsyText
            name='email'
            hintText="What is your e-mail adress?"
            floatingLabelText="E-Mail Address"
            value={email}
            required
            fullWidth/>
          <FormsySelect
            name='role'
            fullWidth
            required
            floatingLabelText="User role"
            value={roles}>
            <MenuItem value={'family'} primaryText="Family Member"/>
            <MenuItem value={'teacher'} primaryText="Teacher"/>
            <MenuItem value={'director'} primaryText="Director"/>
            <MenuItem value={'admin'} primaryText="Admin"/>
          </FormsySelect>
          <FormsySelect
            name='language'
            fullWidth
            required
            floatingLabelText="User language"
            value={language}>
            <MenuItem value={'en'} primaryText="English"/>
            <MenuItem value={'tr'} primaryText="Türkçe"/>
          </FormsySelect>
          <FloatingActionButton
            className="float--btn"
            secondary={true}
            type="submit"
            disabled={!this.state.canSubmit}>
            <DoneIcon />
          </FloatingActionButton>
        </Formsy.Form>
      </div>
    );
  }
});
