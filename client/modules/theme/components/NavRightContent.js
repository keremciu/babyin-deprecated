import React from 'react';

import authComposer from '/client/modules/_users/composers/account/auth.js';
import _UserControls from './UserControls.js';

const UserControls = authComposer(_UserControls);

export default class extends React.Component {

  render() {
    return (
      <UserControls classVersion="navbar-nav" />
    );
  }
}
