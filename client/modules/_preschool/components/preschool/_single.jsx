import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Card, CardActions, CardHeader, FlatButton, CardText } = UI;

export default class extends React.Component {

  deleteRecord() {
    var ask = window.confirm('Are you sure you want to delete this?');
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
              Phone: {record.phone}
            </p>
            <p>
              Website: {record.website}
            </p>
            <p>
              Address: {record.address}
            </p>
            <p>
              Capacity: {record.capacity}
            </p>
            <p>
              Created At: {record.createdAt.toString()}
            </p>
          </CardText>
          <CardActions>
            <FlatButton label="Other Preschools" linkButton href={'/preschools/'} />
            <FlatButton label="Edit" linkButton href={'/preschools/' + _id + '/edit'} />
            <FlatButton label="Delete" onClick={this.deleteRecord.bind(this)} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
