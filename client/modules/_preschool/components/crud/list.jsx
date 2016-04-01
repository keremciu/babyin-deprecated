import React from 'react';

import dataComposer from '../../composers/preschool/collection.jsx';
import Component from './_list.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="collection-grid">
        <Container />
      </div>
    );
  }
}
