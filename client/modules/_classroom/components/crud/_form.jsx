import React from 'react';
import { Form } from 'formsy-react';

// material ui
const FMUI = require('formsy-material-ui');
const { FormsySelect, FormsyText } = FMUI;
const UI = require('material-ui');
const { MenuItem, FloatingActionButton, Toolbar, ToolbarGroup, ToolbarTitle } = UI;

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

  render() {
    const {
      schools,
      name,
      description,
      studentCount,
      schoolId,
      picture
    } = this.props;
    const title =
    this.props._id ? TAPi18n.__('editwithname', {name}) : TAPi18n.__('add');
    const numError = TAPi18n.__('error_num');

    const list = schools.map(function (item, i) {
      return (
        <MenuItem
          key={i}
          value={item._id}
          primaryText={item.name} />);
    });

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
              <FormsySelect
                name='schoolId'
                value={schoolId}
                floatingLabelText={<T label="classroom_schoolid" />}
                fullWidth
                required>
                {list}
              </FormsySelect>
              <FormsyText
                name='name'
                value={name}
                hintText={<T label="classroom_name_hint" />}
                floatingLabelText={<T label="form_name" />}
                required
                fullWidth
                validations="minLength:3"
              />
              <FormsyText
                name='description'
                value={description}
                hintText={<T label="form_description" />}
                floatingLabelText={<T label="form_description" />}
                fullWidth
              />
              <FormsyText
                name='studentCount'
                value={studentCount}
                hintText={<T label="classroom_count_hint" />}
                floatingLabelText={<T label="form_count" />}
                fullWidth
                validations="isNumeric"
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
