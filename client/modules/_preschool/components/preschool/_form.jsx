import React from 'react';
import { Form } from 'formsy-react';

const FMUI = require('formsy-material-ui');
const { FormsyText } = FMUI;
const UI = require('material-ui');
const { RaisedButton } = UI;

export default React.createClass({

  getInitialState() {
    return {
      canSubmit: false
    };
  },

  styles: {
    paperStyle: {
      padding: 20
    },
  },

  errorMessages: {
    numError: 'Please only use numbers',
    emailError: 'Please write an e-mail address',
    urlError: 'Please write an url address like http://example.com',
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

  getData(item) {
    // if is it not new record get data
    return this.props._id ? this.props.record[item] : '';
  },

  render() {

    const {record} = this.props;
    const title = this.props._id ? 'Edit: ' + record.name : 'Add new';
    const buttonLabel = 'Save';
    let styles = this.styles;
    let { numError, emailError, urlError } = this.errorMessages;

    return (
        <div style={styles.paperStyle}>
          <h3>{title}</h3>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            >
              <FormsyText
                name='name'
                value={this.getData('name')}
                hintText="The name of preschool"
                floatingLabelText="Name"
                required
                fullWidth
              />
              <FormsyText
                name='phone'
                value={this.getData('phone')}
                hintText="Phone number"
                floatingLabelText="Phone"
                required
                fullWidth
                validations="isNumeric,minLength:5,maxLength:20"
                validationError={numError}
              />
              <FormsyText
                name='website'
                value={this.getData('website')}
                hintText="Website URL"
                floatingLabelText="Website"
                required
                fullWidth
                validations="isUrl"
                validationError={urlError}
              />
              <FormsyText
                name='email'
                value={this.getData('email')}
                hintText="E-Mail Adress"
                floatingLabelText="E-Mail Address"
                required
                fullWidth
                validations="isEmail"
                validationError={emailError}
              />
              <FormsyText
                name='address'
                value={this.getData('address')}
                hintText="Address"
                floatingLabelText="Address"
                required
                fullWidth
              />
              <FormsyText
                name='capacity'
                value={this.getData('capacity')}
                hintText="Capacity"
                floatingLabelText="Capacity"
                required
                fullWidth
                validations="isNumeric,minLength:1,maxLength:20"
                validationError={numError}
              />
              <RaisedButton
                label={buttonLabel}
                type="submit"
                disabled={!this.state.canSubmit}
                primary={true} />
          </Formsy.Form>
        </div>
    );
  }
});
