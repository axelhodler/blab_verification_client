import Ember from 'ember';

export default Ember.Controller.extend({
  hasHashcode: Ember.computed.notEmpty('model.id'),
  hasSubmitter: Ember.computed.notEmpty('model.submitterId'),
  isValid: Ember.computed.and(
    'hasHashcode',
    'hasSubmitter'
  ),
  actions: {
    save() {
      this.get('model').save().then(() => {
        this.transitionToRoute('reports.index');
      });
    }
  },
  now: new Date()
});
