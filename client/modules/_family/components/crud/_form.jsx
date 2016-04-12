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

  render() {
    const {
      name
    } = this.props;
    const title =
    this.props._id ? TAPi18n.__('editwithname', {name}) : TAPi18n.__('add');

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
