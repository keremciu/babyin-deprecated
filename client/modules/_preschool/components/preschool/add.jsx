import React from 'react';

import dataComposer from '../../composers/preschool/add.jsx';
import Component from './_form.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
