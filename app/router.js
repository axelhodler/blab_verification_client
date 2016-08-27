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
    });
  });
  this.route('members');
});

export default Router;
