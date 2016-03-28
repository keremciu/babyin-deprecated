import React from 'react';

// material-ui elements
const UI = require('material-ui');
const { IconButton, IconMenu, Divider, MenuItem, RaisedButton } = UI;

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

const styles = {
  userarea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  iconmenu: {
    color: 'white',
  },
  raisedbtn: {
    margin: 4,
    'text-align': 'center',
  },
};

export default class extends React.Component {

  getLoggedin() {
    const {email} = this.props;
    return (
      <div>
        <IconMenu
          style={styles.iconmenu}
          iconButtonElement={
            <div style={styles.userarea}>
              {email}
              <IconButton><MoreVertIcon color='#ffffff' /></IconButton>
            </div>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem linkButton href="/profile" primaryText={<T label="title" />} />
          <MenuItem linkButton href="/account" primaryText={<T label="account" />} />
          <Divider />
          <MenuItem linkButton href="/logout" primaryText={<T label="signout" />} />
        </IconMenu>
      </div>
    );
  }

  getGuest() {
    return (
      <div>
        <RaisedButton
          href="/register"
          label="Register"
          primary={true}
          style={styles.raisedbtn}
          linkButton />
        <RaisedButton
          href="/login"
          label="Login"
          secondary={true}
          style={styles.raisedbtn}
          linkButton />
      </div>
    );
  }

  render() {
    const {loggedIn} = this.props;
    return loggedIn ? this.getLoggedin() : this.getGuest();
  }
}
