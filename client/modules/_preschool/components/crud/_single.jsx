import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Card, CardActions, CardHeader, FlatButton, CardText } = UI;

export default class extends React.Component {

  deleteRecord() {
    var ask = window.confirm(TAPi18n.__('delete_an_item'));
    if (ask) {
      this.props.deleteAction(this.props._id);
    }
  }

  render() {
    const {_id, record} = this.props;
    return (
      <div>
        {record.saving ? <p>Saving...</p> : null}
        <Card>
          <CardHeader
            title={record.name}
            subtitle={record.email}
          />
          <CardText>
            <p>
              <T label="form_phone" />: {record.phone}
            </p>
            <p>
              <T label="form_website" />: {record.website}
            </p>
            <p>
              <T label="form_address" />: {record.address}
            </p>
            <p>
              <T label="capacity" />: {record.capacity}
            </p>
            <p>
              <T label="created_at" />: {record.createdAt.toString()}
            </p>
          </CardText>
          <CardActions>
            <FlatButton
              label="Edit"
              linkButton
              href={'/preschools/' + _id + '/edit'} />
            <FlatButton
              label="Delete"
              onClick={this.deleteRecord.bind(this)} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
