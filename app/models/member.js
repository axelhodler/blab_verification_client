import DS from 'ember-data';

export default DS.Model.extend({
  verifications: DS.hasMany('verification')
});