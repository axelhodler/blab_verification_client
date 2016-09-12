import DS from 'ember-data';

export default DS.Model.extend({
  verifications: DS.hasMany('verification'),
  fullName: DS.attr('string'),
  mail: DS.attr('string'),
  etherAddress: DS.attr('string')
});