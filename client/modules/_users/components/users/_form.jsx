import React from 'react';
import { Form } from 'formsy-react'

const FMUI = require('formsy-material-ui');
const { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
const UI = require('material-ui');
const { MenuItem, RaisedButton, Divider } = UI;

export default React.createClass({

    getInitialState: function () {
      return {
        canSubmit: false
      };
    },

    errorMessages: {
      wordsError: "Please only use letters"
    },

    enableButton: function () {
      this.setState({
        canSubmit: true
      });
    },

    disableButton: function () {
      this.setState({
        canSubmit: false
      });
    },

    submitForm: function (model) {
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

    styles: {
      paperStyle: {
        margin: 'auto',
        padding: 20
      },
    },


  render() {

    const {_id, error, firstName, lastName, email, role, language } = this.props;
    const roles = this.props._id ? Roles.getRolesForUser(this.props._id)[0] : '';
    const title = this.props._id ? 'Edit: ' + email : 'Add new';
    const buttonLabel = 'Save';
    let { paperStyle } = this.styles;
    let { wordsError } = this.errorMessages;

    return (
      <div style={paperStyle}>
          <h3>{title}</h3>
            <Formsy.Form
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              onValidSubmit={this.submitForm}
              >
                <FormsyText
                  name='firstName'
                  hintText="What is your name?"
                  floatingLabelText="Firstname"
                  value={firstName}
                  required
                  fullWidth
                />
                <FormsyText
                  name='lastName'
                  hintText="What is your last name?"
                  floatingLabelText="Lastname"
                  value={lastName}
                  required
                  fullWidth
                />
                <FormsyText
                  name='email'
                  hintText="What is your e-mail adress?"
                  floatingLabelText="E-Mail Address"
                  value={email}
                  required
                  fullWidth
                />
                <FormsySelect
                  name='role'
                  fullWidth
                  required
                  floatingLabelText="User role"
                  value={roles}
                  >
                  <MenuItem value={'family'} primaryText="Family Member" />
                  <MenuItem value={'teacher'} primaryText="Teacher" />
                  <MenuItem value={'admin'} primaryText="Admin" />
                </FormsySelect>
                <FormsySelect
                  name='language'
                  fullWidth
                  required
                  floatingLabelText="User language"
                  value={language}
                  >
                  <MenuItem value={'en'} primaryText="English" />
                  <MenuItem value={'tr'} primaryText="Türkçe" />
                </FormsySelect>
                <RaisedButton type="submit" label={buttonLabel} disabled={!this.state.canSubmit} primary={true} />
            </Formsy.Form>

      </div>
    );
  }
});
