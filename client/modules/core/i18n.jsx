import React from 'react';
import reactMixin from 'react-mixin';
import {ReactMeteorData} from 'meteor/react-meteor-data';

export class T extends React.Component {
  getMeteorData() {
    return {
      text: TAPi18n.__(this.props.label, this.props.options || {})
    };
  }

  render() {
    return <span>{this.data.text}</span>;
  }
}

reactMixin(T.prototype, ReactMeteorData);

window.T = T;
