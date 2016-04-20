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
    const {_id, email, firstName, lastName, language, error} = this.props;
    const roles = Roles.getRolesForUser(this.props._id)[0];

    return (
      <div>
        {error ? {error} : null }
        <Card>
          <CardTitle title={firstName + ' ' + lastName} subtitle={email} />
          <CardText>
            <p>
              <strong><T label="role" /></strong> {roles}
            </p>
            <Divider />
            <p>
              <strong><T label="language" /></strong> {language}
            </p>
          </CardText>
          <CardActions>
            <FlatButton
              label={<T label="edit" />}
              linkButton
              icon={<EditIcon />}
              href={'/users/' + _id + '/edit'} />
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

// export default Layout;
