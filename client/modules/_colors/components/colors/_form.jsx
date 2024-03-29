import React from 'react';
// import t from 'tcomb-form';
// import _ from 'lodash';

export default React.createClass({

  submitForm(event) {
    event.preventDefault();
    var values = this.refs.form.getValue();
    if (values) {
      // console.log('submitForm values', values);
      if (this.props._id) {
        // values['title'] = 'dupa';
        // console.log('submitForm values with id', values);
        // console.log('submitForm values with id title', values.title);
        this.props.submitAction(values, this.props._id);
      } else {
        this.props.submitAction(values);
      }
    }
  },

  onChange() {
    this.refs.form.getValue(); // <- validate on every change
  },

  render() {

    const debug = false;
    const {error, record} = this.props;

    const title = this.props._id ? 'Edit: ' + record.title : 'Add new';
    const buttonLabel = 'Save';


    return (
      <div>

          <h3>{title}</h3>
          {error ?
          <div className="alert alert-danger" onClick="">
            <span className="octicon octicon-megaphone" ></span>
            {error}
          </div> : null }

        <button className="btn btn-primary" onClick={this.submitForm}>{buttonLabel}</button>
        {debug ? <button className="btn btn-primary"
          onClick={this.componentLog}>component log</button> : null
        }

      </div>
    );
  }

});
