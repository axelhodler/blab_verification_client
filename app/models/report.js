import DS from 'ember-data';

export default DS.Model.extend({
  submitterId: DS.attr('string'),
  valid: DS.attr('boolean'),
  verifications: DS.hasMany('verification'),
  createdOn: DS.attr('date')
});
