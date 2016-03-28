import React from 'react';

// import dataComposer from '../../composers/account/account.jsx';
// import Component from './_form.jsx';
//
// const Container = dataComposer(Component);

// material-ui elements
const UI = require('material-ui');
const { MenuItem, SelectField } = UI;

export default class extends React.Component {

  constructor(props) {
    super(props);
    lang = TAPi18n.getLanguage();
    this.state = {value: lang};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    TAPi18n.setLanguage({value}.value);
    return this.setState({value});
  }

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">
              <div className="col-md-6">
                  <h2 className="font-bold"><T label="title" /></h2>
                  <p>
                    Ut laoreet tempor turpis non malesuada. Nam convallis volutpat massa ac ullamcorper.
                    In ac elementum nulla. Morbi est risus, facilisis quis ipsum et, pellentesque mollis
                    orci. Morbi sodales est risus, at luctus diam ultrices nec. Nulla ultricies semper
                    arcu, dictum varius neque. Morbi consequat mollis accumsan. Suspendisse eget imperdiet dui.
                    Duis malesuada porta massa vitae ultrices. Praesent consectetur in sem non vehicula.
                    Nunc a congue magna. Quisque nunc sapien, fringilla ut laoreet ut, porttitor vitae nulla.
                  </p>
              </div>
              <div className="col-md-6">
                  <div className="ibox-content">
                    <h3>Account page</h3>
                    <SelectField value={this.state.value} onChange={this.handleChange} autoWidth={true}>
                      <MenuItem value={"en"} primaryText="English"/>
                      <MenuItem value={"tr"} primaryText="Türkçe"/>
                    </SelectField>
                  </div>
              </div>
          </div>
          <hr/>
      </div>
    );
  }
}
