import React from 'react';

import dataComposer from '../../composers/users/collection.jsx';
import Component from './_collection.jsx';
const Container = dataComposer(Component);

// material ui elements
const UI = require('material-ui');
const { FloatingActionButton } = UI;

import ContentAdd from 'material-ui/lib/svg-icons/content/add';

export default class extends React.Component {

  render() {
    return (
      <div className="collection-grid">
        <FloatingActionButton
          className="float--btn"
          linkButton href="preschools/add">
            <ContentAdd />
        </FloatingActionButton>
        <Container />
      </div>
    );
  }
}
