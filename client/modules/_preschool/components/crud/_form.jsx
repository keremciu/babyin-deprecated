import React from 'react';
import { Form } from 'formsy-react';

// material ui
const FMUI = require('formsy-material-ui');
const { FormsyText } = FMUI;
const UI = require('material-ui');
const { FloatingActionButton, Toolbar, ToolbarGroup, ToolbarTitle } = UI;

// material ui svg icons
import DoneIcon from 'material-ui/lib/svg-icons/action/done';

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

  getData(item) {
    // if is it not new record get data
    return this.props._id ? this.props.record[item] : '';
  },

  render() {

    const {record} = this.props;
    const title =
    this.props._id ? <T label="edit" options={{ name: record.name }} /> : <T label="add" />;
    const numError = <T label="error_num" />;
    const emailError = <T label="error_email" />;
    const urlError = <T label="error_url" />;

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
                value={this.getData('name')}
                hintText={<T label="preschool_name_hint" />}
                floatingLabelText={<T label="form_name" />}
                required
                fullWidth
                validations="minLength:3"
              />
              <FormsyText
                name='phone'
                value={this.getData('phone')}
                hintText={<T label="form_phone" />}
                floatingLabelText={<T label="form_phone" />}
                required
                fullWidth
                validations="isNumeric,minLength:5,maxLength:20"
                validationError={numError}
              />
              <FormsyText
                name='website'
                value={this.getData('website')}
                hintText={<T label="form_website" />}
                floatingLabelText={<T label="form_website" />}
                fullWidth
                validations="isUrl"
                validationError={urlError}
              />
              <FormsyText
                name='email'
                value={this.getData('email')}
                hintText={<T label="form_email" />}
                floatingLabelText={<T label="form_email" />}
                required
                fullWidth
                validations="isEmail"
                validationError={emailError}
              />
              <FormsyText
                name='address'
                value={this.getData('address')}
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
                value={this.getData('capacity')}
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