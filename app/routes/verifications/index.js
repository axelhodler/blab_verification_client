import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('reports/show').get('loans');
  }
});
