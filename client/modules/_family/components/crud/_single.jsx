import React from 'react';

// material ui elements
const UI = require('material-ui');
const { Card, CardActions, CardTitle, FlatButton, CardText } = UI;

// materail svg icons
import EditIcon from 'material-ui/lib/svg-icons/image/edit';
import DeleteIcon from 'material-ui/lib/svg-icons/action/delete';

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
      saving
    } = this.props;
    return (
      <div>
        {saving ? <p>Saving...</p> : null}
        <Card>
          <CardTitle title={name} />
          <CardText>
            <p>

            </p>
          </CardText>
          <CardActions>
            <FlatButton
              label={<T label="edit" />}
              linkButton
              icon={<EditIcon />}
              href={'/familys/' + _id + '/edit'} />
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
