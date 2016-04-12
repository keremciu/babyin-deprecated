import React from 'react';

import dataComposer from '../../composers/edit.jsx';
import Component from './_form.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    const {_id} = this.props;
    return (
      <div>
        <Container _id={_id}/>
      </div>
    );
  }
}
