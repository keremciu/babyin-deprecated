import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Divider, Card, CardActions, CardTitle, FlatButton, CardText } = UI;

import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class extends React.Component {

  deleteRecord() {
    var ask = window.confirm(TAPi18n.__('delete_an_item'));
    if (ask) {
      this.props.deleteAction(this.props._id);
    }
  }

  render() {
    const {
      _id,
      name,
      email,
      phone,
      website,
      address,
      capacity,
      saving
    } = this.props;
    return (
      <div>
        {saving ? <p>Saving...</p> : null}
        <Card>
          <CardTitle title={name} subtitle={email} />
          <CardText>
            <p>
              <strong><T label="form_phone" /></strong> {phone}
            </p>
            <Divider />
            <p>
              <strong><T label="form_website" /></strong> {website}
            </p>
            <Divider />
            <p>
              <strong><T label="form_address" /></strong> {address}
            </p>
            <Divider />
            <p>
              <strong><T label="capacity" /></strong> {capacity}
            </p>
          </CardText>
          <CardActions>
            <FlatButton
              label={<T label="edit" />}
              linkButton
              icon={<EditIcon />}
              href={'/schools/' + _id + '/edit'} />
            <FlatButton
              label={<T label="delete" />}
              icon={<DeleteIcon />}
              onClick={this.deleteRecord.bind(this)} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
