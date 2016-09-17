import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  tokenContents: Ember.computed.alias('applicationController.tokenData')
});
