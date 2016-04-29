import React from 'react';
import { Form } from 'formsy-react';

const FMUI = require('formsy-material-ui');
const { FormsyText } = FMUI;
import * as UI from 'material-ui';
const { FloatingActionButton, Toolbar, ToolbarGroup, ToolbarTitle } = UI;

import DoneIcon from 'material-ui/svg-icons/action/done';

export default React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    // console.log('validSubmit', data);
    this.props.submitAction(data.email, data.password);
  },

  // invalidSubmit(data) {
  invalidSubmit() {
    // console.log('invalidSubmit', data);
  },

  enableButton() {
    // console.log('enable button');
    this.setState({ canSubmit: true });
  },

  disableButton() {
    // console.log('disable button');
    this.setState({ canSubmit: false });
  },

  getInitialState() {
    return {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false
    };
  },

  render() {

    const {error} = this.props;

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Login Form" />
          </ToolbarGroup>
        </Toolbar>
        <Formsy.Form
          className="form"
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form">
            {error ?
            <div className="alert alert-danger" onClick="">
              <span className="octicon octicon-megaphone" ></span>
              {error}
            </div> : null }

            <FormsyText
              name='email'
              hintText={<T label="firstname_hint" />}
              floatingLabelText={<T label="firstname" />}
              required
              fullWidth
              validations="isEmail"
              validationError="Please provide a valid email address."
              />
              <FormsyText
                name='password'
                hintText={<T label="firstname_hint" />}
                floatingLabelText={<T label="firstname" />}
                type='password'
                required
                fullWidth
                validations="minLength:4"
                validationError="That password looks a bit short, try again"
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
