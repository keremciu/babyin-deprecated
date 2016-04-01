import React from 'react';

// import Container from '../../containers/colors/single.jsx';
import dataComposer from '../../composers/preschool/single.jsx';
import Component from './_single.jsx';
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
