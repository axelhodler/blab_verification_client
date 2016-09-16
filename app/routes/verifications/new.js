import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var report = this.modelFor('reports/show');

    return this.store.createRecord('verification', {
      report: report
    });
  }
});
