import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.js';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/template', {
    name: 'left',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<Simple />),
      });
    }
  });

}
