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
    const roles = _id ? this.props.user.getRole() : '';
    const title =
    this.props._id ? TAPi18n.__('editwithname', {name: email }) : TAPi18n.__('add');

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
            hintText={<T label="firstname_hint" />}
            floatingLabelText={<T label="firstname" />}
            value={firstName}
            required
            fullWidth/>
          <FormsyText
            name='lastName'
            hintText={<T label="lastname_hint" />}
            floatingLabelText={<T label="lastname" />}
            value={lastName}
            required
            fullWidth/>
          <FormsyText
            name='email'
            hintText={<T label="form_email_hint" />}
            floatingLabelText={<T label="form_email" />}
            value={email}
            required
            fullWidth/>
          <FormsySelect
            name='role'
            fullWidth
            required
            floatingLabelText={<T label="role" />}
            value={roles}>
            <MenuItem
              value={'family'}
              primaryText={<T label="family" />} />
            <MenuItem
              value={'teacher'}
              primaryText={<T label="teacher" />} />
            <MenuItem
              value={'director'}
              primaryText={<T label="director" />}/>
            <MenuItem
              value={'admin'}
              primaryText={<T label="admin" />}/>
          </FormsySelect>
          <FormsySelect
            name='language'
            fullWidth
            required
            floatingLabelText={<T label="language" />}
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
