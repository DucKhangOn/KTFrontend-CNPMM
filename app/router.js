import EmberRouter from '@ember/routing/router';
import config from 'ktbank-fe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('home');

  this.route('charge', function() {
    this.route('charge-into-ktb');
  });

  this.route('page', function() {
    this.route('success');
    this.route('error');
  });
  this.route('admin', function() {
    this.route('users', function() {});
  });
});
