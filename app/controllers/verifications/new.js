import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((model) => {
        this.transitionToRoute('reports.show', model.get('report'));
      });
    }
  }
});
