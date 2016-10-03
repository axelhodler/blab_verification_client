import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reports', function() {
    this.route('new');
    this.route('edit');
    this.route('show', {
      path: ':report_id'
    }, function() {
      this.route('verifications', {resetNamespace: true}, function() {
        this.route('new');
      });
    });
    this.route('myunpublished');
  });
  this.route('members', function() {
    this.route('new');
  });
  this.route('login');
});

export default Router;
