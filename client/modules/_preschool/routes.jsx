import React from 'react';
import {mount} from 'react-mounter';

import {LayoutDefault} from '/client/configs/theme.jsx';

import ListView from './components/preschool/list.jsx';
import AddView from './components/preschool/add.jsx';
import SingleView from './components/preschool/single.jsx';
import EditView from './components/preschool/edit.jsx';

const UI = require('material-ui');
const { IconButton } = UI;

import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  var compRoutes = FlowRouter.group({
    prefix: '/preschools',
    name: 'preschools',
    // triggersEnter: [function(context, redirect) {
    //   // console.log('running group triggers');
    // }]
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
        leftIcon: () => (<div><a href="/preschools"><IconButton><NavigationClose color='#ffffff' /></IconButton></a></div>),
        content: () => (<AddView />)
      });
    }
  });

  compRoutes.route('/:_id', {
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<SingleView _id={_id}/>)
      });
    }
  });

  compRoutes.route('/:_id/edit', {
    action({_id}) {
      mount(LayoutDefaultCtx, {
        leftIcon: () => (<div><a href="/preschools"><IconButton><NavigationClose color='#ffffff' /></IconButton></a></div>),
        content: () => (<EditView _id={_id}/>)
      });
    }
  });
}
