import React from 'react';

// import Container from '../../containers/UsersCollectionContainer.jsx'
import dataComposer from '../../composers/users/add.jsx';
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
