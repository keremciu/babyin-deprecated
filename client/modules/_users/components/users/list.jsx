import React from 'react';

import dataComposer from '../../composers/users/collection.jsx';
import Component from './_list.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="list-grid">
        <Container />
      </div>
    );
  }
}
