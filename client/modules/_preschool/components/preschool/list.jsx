import React from 'react';

import dataComposer from '../../composers/preschool/collection.jsx';
import Component from './_collection.jsx';
const Container = dataComposer(Component);

// material ui elements
const UI = require('material-ui');
const { FloatingActionButton } = UI;

import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const styles = {
  floatbtn: {
    position: 'fixed',
    bottom: 22,
    right: 22,
  },
};

export default class extends React.Component {
  render() {
    return (
      <div className="collection-grid">
        <FloatingActionButton style={styles.floatbtn} linkButton href="preschools/add"><ContentAdd /></FloatingActionButton>
        <Container />
      </div>
    );
  }
}
