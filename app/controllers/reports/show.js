import Ember from 'ember';
import ENV from 'blab-verification-client/config/environment';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  tokenContents: Ember.computed.alias('applicationController.tokenData'),
  canVerify: function() {
    return this.get('tokenContents').id !== +this.get('model').get('submitterId');
  }.property('tokenContents'),
  actions: {
    publish() {
      this.get('model').save().then(() => {
        web3.eth.contract(JSON.parse(ENV.contractAbi)).at(ENV.contractAddress).verify("iShouldBeAHash",() => {
          this.transitionToRoute('reports.index');
        });
      });
    }
  }
});
