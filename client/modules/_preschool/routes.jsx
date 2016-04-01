import React from 'react';
import {mount} from 'react-mounter';

import {LayoutDefault} from '/client/configs/theme.jsx';

import ListView from './components/crud/list.jsx';
import AddView from './components/crud/add.jsx';
import SingleView from './components/crud/single.jsx';
import EditView from './components/crud/edit.jsx';

const UI = require('material-ui');
const { IconButton } = UI;

import CloseIcon from 'material-ui/lib/svg-icons/navigation/close';
import BackIcon from 'material-ui/lib/svg-icons/navigation/arrow-back';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  var compRoutes = FlowRouter.group({
    prefix: '/preschools',
    name: 'preschools',
    triggersEnter: [ function () {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
        route = FlowRouter.current();
      } else {
        FlowRouter.go('/login');
      }
    } ]
  });

  compRoutes.route('/', {
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<ListView />)
      });
    }
  });

  compRoutes.route('/add', {
    action() {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><CloseIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<AddView />)
      });
    }
  });

  compRoutes.route('/:_id', {
    action({_id}) {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><BackIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<SingleView _id={_id}/>)
      });
    }
  });

  compRoutes.route('/:_id/edit', {
    action({_id}) {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><CloseIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<EditView _id={_id}/>)
      });
    }
  });
}
