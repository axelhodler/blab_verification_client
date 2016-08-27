import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('verification', {
      report: this.modelFor('report/show')
    });
  }
});
