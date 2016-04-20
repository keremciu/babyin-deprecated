import methodStubs from './configs/method_stubs';
import actions from './actions';
import routes from './routes.js';
import AppConfig from '/client/configs/app.js';

var description = {
  name: 'description',
  content: AppConfig.description
};

var viewport = {
  name: 'viewport',
  content: 'user-scalable=0,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height'
};

var capable = {
  name: 'mobile-web-app-capable',
  content: 'yes'
};

var iosCapable = {
  name: 'apple-mobile-web-app-capable',
  content: 'yes'
};

var iosAppbar = {
  name: 'apple-mobile-web-app-status-bar-style',
  content: 'black-translucent'
};

var theme = {
  name: 'theme-color',
  content: '#8726F7'
};

var favicon = {
  rel: 'icon',
  sizes: '16x16 32x32',
  type: 'image/png',
  href: '/favicon.png'
};

var appicon = {
  rel: 'apple-touch-icon',
  href: '/icon-194x194.png'
};

DocHead.setTitle(AppConfig.name);
DocHead.addMeta(description);
DocHead.addMeta(viewport);
DocHead.addMeta(capable);
DocHead.addMeta(iosCapable);
DocHead.addMeta(iosAppbar);
DocHead.addMeta(theme);
DocHead.addLink(favicon);
DocHead.addLink(appicon);

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
