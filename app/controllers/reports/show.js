import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  tokenContents: Ember.computed.alias('applicationController.tokenData'),
  canVerify: function() {
    return this.get('tokenContents').id !== +this.get('model').get('submitterId');
  }.property('tokenContents')
});
