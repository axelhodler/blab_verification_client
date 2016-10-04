import Ember from 'ember';
import ENV from 'blab-verification-client/config/environment';
import Web3 from 'npm:web3';

const { getOwner } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  tokenData: Ember.computed('session.session.content.authenticated', function() {
    var authenticator = getOwner(this).lookup('authenticator:jwt'),
      session = this.get('session.session.content.authenticated'),
      tokenData = {};

    if(session && Object.keys(session).length > 0) {
      tokenData = authenticator.getTokenData(session.token);
    }

    return tokenData;
  }),

  contract:(new Web3()).eth.contract(Array.from(ENV.contractAbi)).at(ENV.contractAddress),

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
      this.transitionToRoute('login');
    }
  }
});
