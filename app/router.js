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
    this.route('success-stripe');
  });
  this.route('admin', function() {
    this.route('users', function() {
      this.route('user', { path: '/:user_id' });
    });
    this.route('rate-interests', function() {
      this.route('rate-interest', { path: '/:rateInterest_id' });
    });
  });
  this.route('forgot-password');
  this.route('change-password');

  this.route('saving', function() {
    this.route('open-saving');
    this.route('saving-listing');
    this.route('withdraw-saving', { path: 'withdraw-saving/:withdrawSaving_id' });
  });
  this.route('bank-account-info');
});
