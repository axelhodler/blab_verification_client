import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var report = this.modelFor('reports/show');
    var pickableMembers = this.get('store')
      .findAll('member').then((members) => {
        return members.filter(item => {
          return item.id !== report.get('submitterId');
        });
      });

    return this.store.createRecord('verification', {
      report: report,
      members: pickableMembers
    });
  }
});
