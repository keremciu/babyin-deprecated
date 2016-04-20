import React from 'react';
import { Form } from 'formsy-react';

// material ui
const FMUI = require('formsy-material-ui');
const { FormsyText } = FMUI;
const UI = require('material-ui');
const { FloatingActionButton, Toolbar, ToolbarGroup, ToolbarTitle } = UI;

import DoneIcon from 'material-ui/svg-icons/action/done';

export default React.createClass({

  getInitialState() {
    return {
      canSubmit: false
    };
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submitForm(model) {
    // check this item new or old
    // if this item is old, it has a "_id" prop.
    if (this.props._id) {
      // Submit your validated UPDATE form with submit action of the module
      this.props.submitAction(model, this.props._id);
    } else {
      // // Submit your validated ADD form with submit action of the module
      this.props.submitAction(model);
    }
  },

  render() {
    const {
      name,
      email,
      phone,
      website,
      address,
      capacity
    } = this.props;
    const title =
    this.props._id ? TAPi18n.__('editwithname', {name}) : TAPi18n.__('add');
    const numError = TAPi18n.__('error_num');
    const emailError = TAPi18n.__('error_email');
    const urlError = TAPi18n.__('error_url');

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
            onValidSubmit={this.submitForm}
            >
              <FormsyText
                name='name'
                value={name}
                hintText={<T label="school_name_hint" />}
                floatingLabelText={<T label="form_name" />}
                required
                fullWidth
                validations="minLength:3"
              />
              <FormsyText
                name='phone'
                value={phone}
                hintText={<T label="form_phone" />}
                floatingLabelText={<T label="form_phone" />}
                required
                fullWidth
                validations="isNumeric,minLength:5,maxLength:20"
                validationError={numError}
              />
              <FormsyText
                name='website'
                value={website}
                hintText={<T label="form_website" />}
                floatingLabelText={<T label="form_website" />}
                fullWidth
                validations="isUrl"
                validationError={urlError}
              />
              <FormsyText
                name='email'
                value={email}
                hintText={<T label="form_email" />}
                floatingLabelText={<T label="form_email" />}
                required
                fullWidth
                validations="isEmail"
                validationError={emailError}
              />
              <FormsyText
                name='address'
                value={address}
                hintText={<T label="form_address" />}
                floatingLabelText={<T label="form_address" />}
                multiLine={true}
                rows={2}
                rowsMax={4}
                required
                fullWidth
              />
              <FormsyText
                name='capacity'
                value={capacity}
                hintText={<T label="form_capacity" />}
                floatingLabelText={<T label="form_capacity" />}
                required
                fullWidth
                validations="isNumeric,minLength:1,maxLength:20"
                validationError={numError}
              />
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
