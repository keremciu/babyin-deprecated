import React from 'react';

import dataComposer from '../../composers/account/login.jsx';
import Component from './_form.jsx';

const UI = require('material-ui');
const { FlatButton } = UI;

const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-6">
                  <h2 className="font-bold">Welcome</h2>

                  <p>

                  </p>


              </div>
              <div className="col-md-6">
                  <div className="ibox-content">

                    <h2 className="font-bold">Login</h2>
                    <p>
                        Enter your email address and your password.
                    </p>


                    <Container />

                    <a href="/password">
                        <small>Forgot password?</small>
                    </a>

                    <p className="text-muted text-center">
                        <small>Do not have an account?</small>
                    </p>
                    <FlatButton
                      label="Create an account"
                      primary={true}
                      onTouchTap={this.handleClose}
                      linkButton
                      href="/register"
                    />


                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
