import methodStubs from './configs/method_stubs';
import actions from './actions';
import routes from './routes.jsx';
import AppConfig from '/client/configs/app.js';

var description = {
  name: 'description',
  content: AppConfig.description
};

var viewport = {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
};
var favicon = {
  rel: 'icon',
  sizes: '16x16 32x32',
  type: 'image/png',
  href: '/favicon.png'
};

DocHead.setTitle(AppConfig.name);
DocHead.addMeta(description);
DocHead.addMeta(viewport);
DocHead.addLink(favicon);

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
