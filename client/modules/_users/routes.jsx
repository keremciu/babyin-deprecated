import React from 'react';
import {mount} from 'react-mounter';

import {LayoutDefault} from '/client/configs/theme.jsx';


import Login from './components/login/wrapper.jsx';
import Register from './components/register/wrapper.jsx';
import Password from './components/password/wrapper.jsx';

import Account from './components/account/wrapper.jsx';
import Profile from './components/profile/wrapper.jsx';

import UsersList from './components/users/list.jsx';
import UsersAdd from './components/users/add.jsx';
import UsersSingle from './components/users/single.jsx';
import UsersEdit from './components/users/edit.jsx';

const UI = require('material-ui');
const { IconButton } = UI;

import CloseIcon from 'material-ui/lib/svg-icons/navigation/close';
import BackIcon from 'material-ui/lib/svg-icons/navigation/arrow-back';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/register', {
    name: 'users.register',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Register />)
      });

    }
  });

  FlowRouter.route('/password', {
    name: 'users.password',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Password />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      // Accounts.logout();
      Meteor.logout(() => {
        FlowRouter.go('/login');
      });
    }
  });

  FlowRouter.route('/account', {
    name: 'users.account',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Account />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'users.profile',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Profile name='users.profile'/>)
      });
    }
  });

  var compRoutes = FlowRouter.group({
    prefix: '/users',
    name: 'users',
    triggersEnter: [ function () {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
        route = FlowRouter.current();
      } else {
        FlowRouter.go('/login');
      }
    } ]
  });

  compRoutes.route('/', {
    name: 'users.list',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<UsersList />)
      });
    }
  });

  compRoutes.route('/add', {
    name: 'users.add',
    action() {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><CloseIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<UsersAdd />)
      });
    }
  });

  compRoutes.route('/:_id', {
    name: '_users.usersSingle',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><BackIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<UsersSingle _id={_id}/>),
      });
    }
  });

  compRoutes.route('/:_id/edit', {
    name: '_users.usersEdit',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div>
          <a href={FlowRouter.current().route.group.prefix}>
            <IconButton><CloseIcon color='#ffffff' /></IconButton>
          </a></div>),
        content: () => (<UsersEdit _id={_id}/>)
      });
    }
  });

}
